//Login
const commonAcc = 'jp'
const adminAcc = 'marc'
const passwordBoth = '1010'
const loginPageTitle = 'Hotel Accomodation - login page'
const loginFormLabel = 'Please, login!'
const loginTextField = '#login'
const loginPassField = '#senha'
const loginButton = '#loginBtn'



function checkLoginPageTitle() {
    cy.title().should('eq',loginPageTitle)
}
function preformLoginCommon() {
    cy.contains(loginFormLabel)    
    cy.get(loginTextField).type(commonAcc)
    cy.get(loginPassField).type(passwordBoth)
    cy.get(loginButton).click()

}
function preformLoginAdmin() {
    cy.contains(loginFormLabel)    
    cy.get(loginTextField).type(adminAcc)
    cy.get(loginPassField).type(passwordBoth)
    cy.get(loginButton).click()

}



module.exports = {
    checkLoginPageTitle,
    preformLoginCommon,
    preformLoginAdmin,
}