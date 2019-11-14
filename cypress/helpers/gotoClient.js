//Open Client
const dashboardTitle = 'Access Denied!' 
const commonAccess = 'Access Denied!'
const buttonCreateClient = '.btn-primary'
const checkContainsCreate = 'Create New Client'
const checkContainsShow = 'Show All Clients'
const openClient = ':nth-child(4) > .panel > a > .panel-footer > .clearfix'



function goToClientpageCommon() {
    cy.get(openClient).click()
    cy.title().should('eq',dashboardTitle)
    cy.contains(commonAccess)

}
function goToClientpageAdmin() {
    cy.get(openClient).click()
    cy.contains(checkContainsCreate)
    cy.get(buttonCreateClient).click()
    cy.contains(checkContainsShow)
}




module.exports = {
goToClientpageCommon,
goToClientpageAdmin
}