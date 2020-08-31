// https://docs.cypress.io/api/introduction/api.html

describe('Check if test setup is working', () => {
    it('Visits the app root url', () => {
        cy.visit('http://localhost:8080')
        cy.contains('h1', 'to Upscale your team and')
    })

    it('test update-profile title header', ()=>{
        cy.visit('http://localhost:8080/cooperate/update-profile')
        cy.contains('h3', 'Edit Company Profile')
    })

    it('test submit button redirects when clicked', ()=>{

        cy.visit('http://localhost:8080/cooperate/update-profile')


    })
})