context("Test Create Course", () => {
    Cypress.config('baseUrl', 'http://localhost:8080')
    // Refresh create course page
    beforeEach(() => {
        cy.visit("");
        cy.get('.loginTab').click();
        cy.wait(1000);
        cy.get('.email').type(Cypress.env('auth_username'), { delay: 500});
        cy.wait(1000);
        cy.get('.password').type(Cypress.env('auth_password'), { delay: 500});
        cy.wait(1000);
        cy.get('.submit-button-container').click();
        cy.wait(10000);
    })

    // Create a course
    it('should create a course',  () => {
        cy.get('.drawer').click();
        cy.wait(1000);
        cy.get('.course').click();
        cy.wait(1000);
        cy.get('.btn-course').click();
        cy.wait(1000);
        cy.contains('h1', 'Create Course');
        cy.wait(1000);
        const imagePath = '/bgi.png';
        cy.get('.uploadImage').attachFile(imagePath);
        cy.wait(5000);
        cy.get('.course-name').type('Introduction to Meme', { delay: 500});
        cy.get('.course-cat').type('Game Development', { delay: 500});
        cy.get('.course-req').type('Introduction to Me', { delay: 500});
        cy.get('.ql-editor').type('Introduction to Me', { delay: 500});
        cy.get('.course-des').type('Introduction to Me', { delay: 500});
        cy.get('.submit-button-container').click();
        cy.wait(5000);
        cy.url().should('include', '/courses/myCourses') // => true
        cy.url().should('eq', 'http://localhost:8080/corporate/courses/myCourses') // => true
    });
})