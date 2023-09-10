import{createadmin} from "../fixtures/selectors.js";

Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let number = parseInt(Math.random()*10000000, 10);
let phone_number = '090' + number;
let employeename = 'Idowu Bunmeey_ Christy';
let username = 'Idowu Christy';
let password = phone_number + '@yopmail.com';

const access = require("./validLogin.cy.js");
describe("CREATING A NEW ADMIN USER", function () {
    this.beforeEach(function () {
        cy.visit("/")
        access.validLogin();   
        
    })
    it("Verify User can create Admin", function(){
       cy.get(createadmin.adminBtn).click()
       cy.get(createadmin.addadminBtn).click()
       cy.get('.oxd-main-menu-search > .oxd-icon-button').click()
       cy.wait(5000)
       cy.get(createadmin.userrole).click()
       cy.get(createadmin.userrole).invoke('show')
       cy.contains('ESS').click()
       cy.get(createadmin.status).click()
       cy.get(createadmin.status).invoke('show')
       cy.contains('Enabled').click()
       cy.get(createadmin.employeeName).type('Idowu Bunmeey_ Christy')
       cy.contains('Idowu Bunmeey_ Christy').click()
       cy.get(createadmin.usersname).type(username)
       cy.get(createadmin.password).type(password)
       cy.get(createadmin.confirmPassword).type(password)
       cy.get(createadmin.save).click()
       cy.wait(5000)
    })
    it("Verify User can EDIT ", function(){
      cy.wait(5000)
      cy.get(createadmin.adminBtn).click()
      cy.get(createadmin.username).type('Idowu Christy')
      cy.get(createadmin.userRole).click({force: true})
      cy.get(createadmin.userRole).invoke('show')
      cy.contains('ESS').click()
      cy.get(createadmin.employeeNameFld).type('Idowu Bunmeey_ Christy')
      cy.contains('Idowu Bunmeey_ Christy').click()
      cy.get(createadmin.statusBtn).click({force: true})
      cy.get(createadmin.statusBtn).invoke('show')
      cy.contains('Enabled').click({force: true})
      cy.get(createadmin.searchBtn).click({force: true})
      cy.get(createadmin.editIcon).click({force: true})
      cy.get(createadmin.changePasswordIcon).click({force: true})
      cy.get(createadmin.password).type(password)
      cy.get(createadmin.confirmPassword).type(password)
      cy.get(createadmin.save).click()
     })
     it("Verify User can DELETE", function(){
        cy.wait(5000)
      cy.get(createadmin.adminBtn).click()
      cy.get(createadmin.username).type('Idowu Christy')
      cy.get(createadmin.userRole).click({force: true})
      cy.get(createadmin.userRole).invoke('show')
      cy.contains('ESS').click()
      cy.get(createadmin.employeeNameFld).type('Idowu Bunmeey_ Christy')
      cy.contains('Idowu Bunmeey_ Christy').click()
      cy.get(createadmin.statusBtn).click({force: true})
      cy.get(createadmin.statusBtn).invoke('show')
      cy.contains('Enabled').click({force: true})
      cy.get(createadmin.searchBtn).click({force: true})
      cy.get(createadmin.deleteIcon).click({force: true})
      cy.get(createadmin.yesDeleteBtn).click({force: true})
      
 
     })
});