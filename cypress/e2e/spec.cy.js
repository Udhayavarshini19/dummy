describe('xyz bank customer page', () => {
  beforeEach(()=>{
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/list');
  })
  it('validate customer existence', () => {
    cy.get('table>tbody>tr').should('have.length.gt',0);
  })
  it('should fetch searched customer',()=>{
    cy.get('input[ng-model="searchCustomer"]').type("harry");
    cy.get('table>tbody>tr>td').should('contain','Harry');
  })
  it('should delete customer',()=>{
    cy.get('table>tbody>tr>td').contains('Harry').parent().find('button').click();
    cy.get('table>tbody>tr>td').should('not.contain','Harry');
  })
  it('should delete customer fetched by search',()=>{
    cy.get('input[ng-model="searchCustomer"]').type("harry");
    cy.get('table>tbody>tr>td').contains('Harry').parent().find('button').click();
    cy.get('table>tbody>tr').should('have.length',0);
  })

})




