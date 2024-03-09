const helpers = require("../runtime/helpers");

module.exports = function () {

    this.Given(/^I am on the "([^"]*)" website$/, function (objectKey) {
        console.log('The objectKey is: ' + page.parabank[objectKey])
        // Write code here that turns the phrase above into concrete actions
        return helpers.loadPage(page.parabank[objectKey]);
    });
    this.When(/^I enter "([^"]*)" with "([^"]*)"$/,function(Username,Password) { // VehiclesButton, InventoryLink 
        page.parabank.inputElement('Username',Username);
        page.parabank.inputElement('Password',Password);
       });

    this.When(/^I click on "([^"]*)"$/, function(objectKey) { // VehiclesButton, InventoryLink
        return page.parabank.clickElement(objectKey)
    });

    this.Then(/^I enter inputs to register$/, function (table) {
        const fields = table.rows();
        for (i = 0; i < fields.length; i++) {
           page.parabank.inputElement(fields[i][0],fields[i][1]);
        };
        return;
    });
    this.Then(/^I enter inputs for forgetinfo$/, function (table) {
        const fields = table.rows();
        for (i = 0; i < fields.length; i++) {
           page.parabank.inputElement(fields[i][0],fields[i][1]);
        };
        return;
    });

    this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
        console.log('The objectKey in commonsteps is: ' + objectKey)
        return page.parabank.elementExists(objectKey);
     });
}
