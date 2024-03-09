const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    parabank: 'https://parabank.parasoft.com/', 
    elements: {
        Username:by.name('username'),
        Password:by.name('password'), 
        FirstName:'//*[@id="customer.firstName"]',
        LastName:'//*[@id="customer.lastName"]',
        Address :'//*[@id="customer.address.street"]',
        City:'//*[@id="customer.address.city"]',
        State:'//*[@id="customer.address.state"]',
        ZipCode:'//*[@id="customer.address.zipCode"]',
        Phone:'//*[@id="customer.phoneNumber"]',
        SSN:'//*[@id="customer.ssn"]',
        Regusername:'//*[@id="customer.username"]',
        Regpassword:'//*[@id="customer.password"]',
        Confirm :'//*[@id="repeatedPassword"]',
        LoginActionButton:'//*[@id="RegistrationForm"]/div[3]/button',
        ErrorMessage:'//*[@id="RegistrationForm"]/div[2]/div[2]',
        LoginButton:'//*[@id="loginPanel"]/form/div[3]/input',
        Register:'//*[@id="loginPanel"]/p[2]/a',
        RegisterButton:'//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input',
        Forgetinfo:'//*[@id="loginPanel"]/p[1]/a',
        findmyinfo:'//*[@id="lookupForm"]/table/tbody/tr[8]/td[2]/input',
        Fn:'//*[@id="firstName"]',
        Ln:'//*[@id="lastName"]',
        RegAddress:'//*[@id="address.street"]', 
        RegCity:'//*[@id="address.city"]',
        RegState:'//*[@id="address.state"]',
        RegZipCode:'//*[@id="address.zipCode"]',
        RegSSN:'//*[@id="ssn"]',
        Welcomemessage:'//*[@id="leftPanel"]/p/b',
        Welcomemsg:'//*[@id="rightPanel"]/h1',
        CustomerInfo:'//*[@id="rightPanel"]/h1',
    },

    clickElement: async function (objectKey) { // LoginButton
        // eslint-disable-next-line no-console
        console.log('The objectKey  is: '+objectKey) 
        const selector = this.elements[objectKey];
        console.log('The xpath expression is: '+selector)  
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector)).click();
    },

    inputElement: async function (inputname, inputvalue) { // username or password
        const selector = this.elements[inputname];
        await driver.sleep(8000);
        return driver.findElement(By.xpath(selector)).sendKeys(inputvalue);
    },

    elementExists: async function (objectKey) {
        // eslint-disable-next-line no-console
        const selector = this.elements[objectKey]; 
        await driver.sleep(3000);
        return driver.findElement(By.xpath(selector)); // true // false
    },

}