// https://docs.cypress.io/api/introduction/api.html

describe('Check if test setup is working', () => {
  it('Visits the app root url', () => {
    cy.visit('http://localhost:8080')
    cy.contains('h1', 'to Upscale your team and')
  })

  it('test preview-profile title header', ()=>{
    cy.visit('http://localhost:8080/cooperate/preview-profile')
    cy.contains('h3', 'Company Profile')
  })

  it('test edit button redirects when clicked', ()=>{

    cy.visit('http://localhost:8080/cooperate/preview-profile')

    cy.get('.edit-button').click()

    cy.url()
        .should('include', '/cooperate/update-profile')



  })
})
