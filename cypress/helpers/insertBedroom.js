//Create fake info and fill
const faker = require('faker')
const fakerNumber = faker.random.number(10000)

const roomStatus = '#bedroomStatusId'
const roomType = '#typeBedroomId'

const buttonCreateBedroom = '.btn-primary'
const fillPrice = '#priceDaily'
const fillNumber = '#number'
const fillFloor = '#floor'
const fillDescription = '#description'

function insertBedroomData(){
    cy.get(fillPrice).type(fakerNumber)
    cy.get(fillDescription).type(fakerNumber)
    cy.get(fillFloor).type(fakerNumber)
    cy.get(fillNumber).type(fakerNumber)
    cy.get(roomStatus).select('1')
    cy.get(roomType).select('2')
    cy.get(buttonCreateBedroom).click()
    cy.contains(fakerNumber)

}


module.exports ={
insertBedroomData

}