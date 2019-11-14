//Open Bedroom
const buttonCreateClient = '.btn-primary'
const checkContainsCreate = 'Create New Bedroom'
const checkContainsShow = 'Show All Bedrooms'
const openBedroom = ':nth-child(2) > .panel > a > .panel-footer > .clearfix'



function goToBedroompageAdmin() {
    cy.get(openBedroom).click()
    cy.contains(checkContainsCreate)
    cy.get(buttonCreateClient).click()
    cy.contains(checkContainsShow)
}




module.exports = {
goToBedroompageAdmin
}