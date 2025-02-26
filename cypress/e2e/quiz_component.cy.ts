/// <reference types="cypress" />


describe('quiz component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('displays the first question and 4 possible answers by default', () => {
      cy.get('.quiz-content .question').should('have.text', 'An animal cell contains:')
      cy.get('.quiz-content .toggle-wrapper').should('have.length', 4)
    })
  
    it('When button is clicked, it is active', () => {
      cy.get('.toggle-container button').each((button) => {
        cy.wrap(button).click().should('have.class', 'active')
      })
    })
  
    it('When all answers are correct, buttons lock, next button shows and answer statement updates', () => {
      const answers = [
        "Ribosomes",
        "Cytoplasm",
        "Partially permeable membrane",
        "Mitochondria",
      ]
      cy.get('.toggle-container').each((container, index) => {
        cy.wrap(container).children('button').each((button) => {
          if (button.text().includes(answers[index])) {
            cy.wrap(button).click()
          }        
        })
      })
      cy.get('.toggle-container button').should('have.attr', 'disabled')
      cy.get('.next-btn').should('exist')
      cy.get('.answer-statement').should('have.text', 'The answer is correct!')
    })
  })
  