const { By, Key, Builder, until } = require('selenium-webdriver');
require('chromedriver');
const chrome = require('selenium-webdriver/chrome');
const chromeOptions = new chrome.Options();
chromeOptions.headless();
const TestCase_Login = async () => {
let driver = await new Builder()
.forBrowser('chrome')
.setChromeOptions(chromeOptions)
.build();
try {
await driver.get('https://localhost:5000/login');
await driver.findElement(By.name('email')).sendKeys("minaellahi@yahoo.com");
await driver.findElement(By.name('password')).sendKeys('mina');
await driver.findElement(By.xpath('/html/body/div/div/2')).click();
await driver.sleep(1000);
let text = await driver.findElement(By.xpath('//*[@id="Dashboard]/section/h2'))
.getText();

if (text === "Dashboard"){
    console.log('Test Case-1 (LOGIN) passed')
}else{
    console.log('Test Case (LOGIN) failed')
}
} catch (error) {
console.log('Test Case-1 (LOGIN) failed.');
}
};

const TestCase_Register = async () => {
let driver = await new Builder()
.forBrowser('chrome')
.setChromeOptions(chromeOptions)
.build();
try {
await driver.get('https://localhost:5000/Register');
await driver.findElement(By.name('email')).sendKeys("minaellahi@yahoo.com");
await driver.findElement(By.name('password')).sendKeys('mina');
await driver.findElement(By.name('name')).sendKeys('Mina Ellahi');
await driver.findElement(By.name('country')).sendKeys('Pakistan');
await driver.findElement(By.name('address')).sendKeys('COMSATS University islamabad');
await driver.findElement(By.xpath('//*[@id="Register"]/section/div/div2/div[2]/')).click();
await driver.sleep(1000);
let text = await driver.findElement(By.xpath('//*[@id="login]/div/div2/h2')).getText();

if (text === "Successful"){
    console.log('Test Case-1 (REGISTER) passed')
}else{
    console.log('Test Case (REGISTER) failed')
}
} catch (error) {
console.log('Test Case-1 (REGISTER) failed.');
}
};

const TestCase_DeleteProfile = async () => {
let driver = await new Builder()
.forBrowser('chrome')
.setChromeOptions(chromeOptions)
.build();
try {
await driver.get('https://localhost:5000/login');
await driver.findElement(By.name('email')).sendKeys("minaellahi@yahoo.com");
await driver.findElement(By.name('password')).sendKeys('mina');
await driver.findElement(By.xpath('//*[@id="Dashboard"]/div/section/div2/button')).click();
await driver.findElement(By.xpath('//*[@id="Profile"]/div/section/button')).click();
await driver.sleep(1000);
let text = await driver.findElement(By.xpath('//*[@id="Register]/section/div2/h2')).getText();

if (text === "Register"){
    console.log('Test Case-1 (DELETEPROFILE) passed')
}else{
    console.log('Test Case (DELETEPROFILE) failed')
}
} catch (error) {
console.log('Test Case-1 (DELETEPROFILE) failed.');
}
};

const TestCase_AddDetails = async () => {
let driver = await new Builder()
.forBrowser('chrome')
.setChromeOptions(chromeOptions)
.build();
try {
await driver.get('https://localhost:5000/login');
await driver.findElement(By.name('email')).sendKeys("minaellahi@yahoo.com");
await driver.findElement(By.name('password')).sendKeys('mina');
await driver.findElement(By.xpath('//*[@id="Dashboard"]/section/div2/div/div/div2/div[3]/button')).click();
await driver.findElement(By.name('budget')).sendKeys("100");
await driver.findElement(By.name('title')).sendKeys('WebDeveloper');
await driver.findElement(By.name('descritpion')).sendKeys('needs to complete task in the due date');
await driver.findElement(By.xpath('//*[@id="Add"]/div/div/div[2]/button')).click();
await driver.sleep(1000);
let text = await driver.findElement(By.xpath('//*[@id="Adddetail]/div/div2/h6')).getText();

if (text === "100"){
    console.log('Test Case-1 (ADDDETAILS) passed')
}else{
    console.log('Test Case (ADDDETAILS) failed')
}
} catch (error) {
console.log('Test Case-1 (ADDDETAILS) failed.');
}
};

const TestCase_DeleteDetails = async () => {
let driver = await new Builder()
.forBrowser('chrome')
.setChromeOptions(chromeOptions)
.build();
try {
await driver.get('https://localhost:5000/login');
await driver.findElement(By.name('email')).sendKeys("minaellahi@yahoo.com");
await driver.findElement(By.name('password')).sendKeys('mina');
await driver.findElement(By.xpath('//*[@id="Dashboard"]/section/div2/div/div2/div[3]/button')).click();
await driver.findElement(By.xpath('//*[@id="Details"]//div2/div/div/button')).click();
await driver.findElement(By.xpath('//*[@id="Details"]/div/div/div[2]/div/div')).click();
await driver.sleep(1000);
let text = await driver.findElement(By.xpath('//*[@id=Details"]/div/div/div2/h6')).getText();

if (text === "0"){
    console.log('Test Case-1 (DELETEDETAILS) passed')
}else{
    console.log('Test Case (DELETEDETAILS) failed')
}
} catch (error) {
console.log('Test Case-1 (DELETEDETAILS) failed.');
}
};

module.exports = { TestCase_Login , TestCase_Register , TestCase_DeleteProfile , TestCase_AddDetails, TestCase_DeleteDetails};