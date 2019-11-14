//Create fake info and fill
const faker = require('faker')
const fakeEmail = faker.internet.email()
const fakerSocialSecurityNumber = faker.random.number(10000)
const fakeName = faker.name.firstName()

const buttonCreateClient = '.btn-primary'
const fillSocialSecNum = '#socialSecurityNumber'
const fillEmail = '#email'
const fillName = '#name'
const clickGender = '#gender > tbody > tr > :nth-child(1) > label'
function insertClientData(){
    cy.get(fillName).type(fakeName)
    cy.get(fillEmail).type(fakeEmail)
    cy.get(fillSocialSecNum).type(fakerSocialSecurityNumber)
    cy.get(clickGender).click()
    cy.get(buttonCreateClient).click()
    cy.contains(fakerSocialSecurityNumber)
}


module.exports ={
insertClientData

}
