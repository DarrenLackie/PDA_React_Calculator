describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should be able to add', () => {
    cy.get("#number1").click()
    cy.get("#operator_add").click()
    cy.get("#number4").click()
    cy.get("#operator-equals").click()
    cy.get('.display').should('contain', 5)
  })

  it('should be able to subtract', () => {
    cy.get("#number7").click()
    cy.get("#operator-subtract").click()
    cy.get("#number4").click()
    cy.get("#operator-equals").click()
    cy.get('.display').should('contain', 3)
  })

  it('should be able to multiply', () => {
    cy.get("#number3").click()
    cy.get("#operator-multiply").click()
    cy.get("#number5").click()
    cy.get("#operator-equals").click()
    cy.get('.display').should('contain', 15)
  })

  it('should be able to divide', () => {
    cy.get("#number2").click()
    cy.get("#number1").click()
    cy.get("#operator-divide").click()
    cy.get("#number7").click()
    cy.get("#operator-equals").click()
    cy.get('.display').should('contain', 3)
  })

  it('should be able to divide', () => {
    cy.get("#number2").click()
    cy.get("#number1").click()
    cy.get("#number7").click()
    cy.get("#number8").click()
    cy.get("#number3").click()
    cy.get('.display').should('contain', 21783)
  })

  it('should be able to handle multiple operations', () => {
    cy.get("#number1").click()
    cy.get("#operator_add").click()
    cy.get("#number4").click()
    cy.get("#operator-subtract").click()
    cy.get("#number2").click()
    cy.get("#operator-multiply").click()
    cy.get("#number7").click()
    cy.get("#operator-equals").click()
    cy.get('.display').should('contain', 21)
  })

  it('should be able to clear the running total without affecting the calculation', () => {
    cy.get("#number1").click()
    cy.get("#operator_add").click()
    cy.get("#number4").click()
    cy.get("#operator_add").click()
    cy.get("#number4").click()
    cy.get("#clear").click()
    cy.get("#operator-equals").click()
    cy.get('.display').should('contain', 5)
  })

  it('should be able to handle negative numbers', () => {
    cy.get("#number1").click()
    cy.get("#operator-subtract").click()
    cy.get("#number4").click()
    cy.get("#operator-equals").click()
    cy.get('.display').should('contain', -3)
  })

  it('should be able to handle large numbers', () => {
    cy.get("#number1").click()
    cy.get("#number0").click()
    cy.get("#number0").click()
    cy.get("#number0").click()
    cy.get("#number0").click()
    cy.get("#number0").click()
    cy.get("#number0").click()
    cy.get("#number0").click()
    cy.get("#number0").click()
    cy.get("#number0").click()
    cy.get("#number0").click()
    cy.get("#number0").click()
    cy.get("#operator_add").click()
    cy.get("#number1").click()
    cy.get("#operator-equals").click()
    cy.get('.display').should('contain', 100000000001)
  })

  it('should be able to handle decimals', () => {
    cy.get("#number1").click()
    cy.get("#number0").click()
    cy.get("#operator-divide").click()
    cy.get("#number4").click()
    cy.get("#operator-equals").click()
    cy.get('.display').should('contain', 2.5)
  })

  it('should divide by 0', () => {
    cy.get("#number1").click()
    cy.get("#operator-divide").click()
    cy.get("#number0").click()
    cy.get("#operator-equals").click()
    cy.get('.display').should('contain', 0)
  })

})