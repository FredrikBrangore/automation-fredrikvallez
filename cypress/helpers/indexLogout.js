//Logout
const logoutToggleButton = '.dropdown-toggle'
const logoutButton = '.dropdown-menu > li > a'
const dashboardTitle = 'Dashboard'

function checkDashboardTitle() {
    cy.title().should('eq',dashboardTitle)
}
function preformLogout() {
    cy.get(logoutToggleButton).click()
    cy.get(logoutButton).click()

}


module.exports = {
    checkDashboardTitle,
    preformLogout
}