import{newemployee} from "../fixtures/selectors.js";

Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let number = parseInt(Math.random()*10000000, 10);
let phone_number = '090' + number;
let firstname = 'Idowu';
let middlename = 'Bunmeey_';
let lastname = 'Christy';
let nickname = 'Tester' + number;

const access = require("./validLogin.cy.js");
describe("CREATING A NEW EMPLOYEE", function () {
    beforeEach(function () {
        cy.visit("/")
        access.validLogin();   
        
    })
    it("Verify User can create newemployee", function(){
       cy.get(newemployee.pimBtn).click()
       cy.get(newemployee.addemployeeBtn).click()
       cy.get(newemployee.firstnameField).type(firstname)
       cy.get(newemployee.middlenameField).type(middlename)
       cy.get(newemployee.lastname).type(lastname)
       cy.get(newemployee.saveBtn).click()
       
    })
    it("Verify User can EDIT EMPLOYEE", function(){
        cy.get(newemployee.pimBtn).click()
        cy.get(newemployee.employeeName).type('Idowu Bunmeey_ Christy')
        cy.contains('Idowu Bunmeey_ Christy').click()
        cy.get(newemployee.searchBtn).click({force: true})
        cy.get(newemployee.editIcon).click({force: true})
        cy.get(newemployee.nickname).type(nickname)
        cy.get(newemployee.saveBtn).click({multiple: true})
    })
    it("Verify User can DELETE employee", function(){
        cy.get(newemployee.pimBtn).click()
        cy.get(newemployee.employeeName).type('Idowu Bunmeey_ Christy')
        cy.contains('Idowu Bunmeey_ Christy').click()
        cy.get(newemployee.searchBtn).click({force: true})
        cy.get(newemployee.deleteIcon).click({force: true})
      cy.get(newemployee.yesDeleteBtn).click({force: true})
    })
});