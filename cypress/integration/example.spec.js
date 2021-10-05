
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains body', ()=>{
            cy.get('body').should('be.visible');
        });
        it('contains reset button', ()=> {
            cy.get('#reset').should('be.visible');
        });
        it('contains input box', ()=> {
            cy.get('#input-box').should('be.visible');
        });
        it('contains submit button', ()=> {
            cy.get('#btn').click();
        });
    });

});