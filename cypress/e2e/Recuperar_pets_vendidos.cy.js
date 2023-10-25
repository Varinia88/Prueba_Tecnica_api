describe('Recoger en una lista las mascotas que han sido vendidas',()=>{

    const filePath = 'cypress/support/datos.js'

    it('Comprobamos si el estado existe', () => {
        cy.request({
            method:'GET',
            url: `https://petstore.swagger.io/v2/pet/findByStatus?status=sold`,
        }).then((response) => {
                expect(response.status).to.equal(200);
               
        })
      })

    it('Recogemos las mascotas que se han vendido',() =>{
        cy.request({
            method:'GET',
            url: `https://petstore.swagger.io/v2/pet/findByStatus?status=sold`,
           
        }).then(response =>{
            cy.log(response.body)
            cy.writeFile(filePath, response.body)
        })
    })
});


   
  