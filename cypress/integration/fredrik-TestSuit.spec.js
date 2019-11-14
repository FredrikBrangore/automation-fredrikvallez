import * as funcIndex from '../helpers/indexLogin'
import * as clientHelp from '../helpers/gotoClient'
import * as clientCreate from '../helpers/insertClient'
import * as funcLogout from '../helpers/indexLogout'
import * as bedroomOpen from '../helpers/openBedroom'
import * as bedroomCreate from '../helpers/insertBedroom'


describe('Go to start page', function(){
    beforeEach(() => {
        cy.visit('http://rbt-course:8080/hotel/faces/login/login.xhtml')
        funcIndex.checkLoginPageTitle(cy)
    })
    
    
        it('Perform valid login and logout CommonAcc', function(){
            funcIndex.preformLoginCommon(cy)
            funcLogout.checkDashboardTitle(cy)
            funcLogout.preformLogout(cy)
            funcIndex.checkLoginPageTitle(cy)
        })
    it('Perform valid login and logout AdminAcc', function(){
        funcIndex.preformLoginAdmin(cy)
        funcLogout.checkDashboardTitle(cy)
        funcLogout.preformLogout(cy)
        funcIndex.checkLoginPageTitle(cy)
    })


    it('Go to Client page with CommonAcc', function(){
        funcIndex.preformLoginCommon(cy)
        funcLogout.checkDashboardTitle(cy)
        clientHelp.goToClientpageCommon(cy)
    })

       
    it('Go to Client page with AdminAcc and make a new Client', function(){
        funcIndex.preformLoginAdmin(cy)
        funcLogout.checkDashboardTitle(cy)
        clientHelp.goToClientpageAdmin(cy)
        clientCreate.insertClientData(cy)

    }) 

    it('Go to Bedroom page with AdminAcc and make a new Bedroom', function(){
        funcIndex.preformLoginAdmin(cy)
        funcLogout.checkDashboardTitle(cy)
        bedroomOpen.goToBedroompageAdmin(cy)
        bedroomCreate.insertBedroomData(cy)

    })
    
    })