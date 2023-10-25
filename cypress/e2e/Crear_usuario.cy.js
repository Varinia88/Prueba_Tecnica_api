describe('Crea tu usuario mediante petición HTTP y posteriormente recuperar datos', () => {
  it('Cuando se cree el usuario debe devolver un 200', () => {
    cy.request({
        method: 'POST',
        url: 'https://petstore.swagger.io/v2/user',
        body:{
            id: 1,
            username: 'Varinia',
            firstName: 'Polar',
            lastName: 'Zevallos',
            email: `vari88@email.com`,
            password: '12345',
            phone: '12345',
            userStatus: 1,
        },
        headers: {
            "Content-Type": "application/json"
        }
       
    }).then((response)=>{
        expect(response.status).to.equal(200);
        if ((response.status == 200)) {
            cy.log("Usuario creado exitosamente");
        }
    })

});

it('Llamamos los datos del Usuario si es 200 es OK',()=>{
    cy.request({
        method:'GET',
        url: 'https://petstore.swagger.io/v2/user/Varinia',
    }).then((response)=>{
        expect(response.status).to.equal(200);
        if ((response.status == 200)) {
            cy.log("se han llamado los datos correctamente");
        }
    });
    
 
  });

it('Devuelve los datos del usuario',()=>{
    const USER_EXPECTED = {
        id: 1,
        username: 'Varinia',
        firstName: 'Polar',
        lastName: 'Zevallos',
        email: `vari88@email.com`,
        password: '12345',
        phone: '12345',
        userStatus: 1,
      };
  
      cy.request({
        method:'GET',
        url: 'https://petstore.swagger.io/v2/user/Varinia',
      }).then((response) => {
        expect(response.body).to.deep.equal(USER_EXPECTED);
      });
      
})
});