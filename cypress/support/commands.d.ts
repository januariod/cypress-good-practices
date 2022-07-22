/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
      /**
       * **Seacrh for some term**
       *
       * @param term string - The word you want to search
       *
       * @example cy.search('hello') // Performs a search using the term 'hello'
       */
       search(term: string, ): Cypress.Chainable<undefined>

      /**
       * **Fill destination fields to update info**.
       *
       * @param data object - The text of the note you want to create
       *
       * @example cy.updateDestination(data) // Object that contains the strings that will be filled in the fields
       */
       updateDestination(data: object): Cypress.Chainable<JQuery<HTMLElement>>
  }
}