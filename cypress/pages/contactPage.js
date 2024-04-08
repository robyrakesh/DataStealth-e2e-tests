/// <reference types="Cypress" />

const FIRST_NAME = '#firstname'
const LAST_NAME = '#lastname'
const EMAIL = '#email-2'
const PHONE = '#phone-2'
const COMPANY = '#company-2'
const TITLE = '#jobtitle'
const SEND_MESSAGE = '#w-node-_3e915ab3-bf08-16d1-b008-23b058233b5b-08f664ac'


export default class contactPage {

  static fillForm({firstName, lastName, email, phone, company, title}) {
    cy.get(FIRST_NAME).type(firstName);
    cy.get(LAST_NAME).type(lastName);
    cy.get(EMAIL).type(email);
    cy.get(PHONE).type(phone)
    cy.get(COMPANY).type(company)
    cy.get(TITLE).type(title)
    cy.get(SEND_MESSAGE).click()
  }

  static verifySuccessfulFormSubmission() {
    cy.get('.success-message-2 > div').should('have.text', 'Thank you! Your submission has been received!')
  }

  static verifyContactDetails() {
    cy.get('.div-block-158').contains('Email Us').should('be.visible')
    cy.get('.div-block-158').contains('Call Us').should('be.visible')
    cy.get('.div-block-158').contains('Headquarters').should('be.visible')
  }

  
}
