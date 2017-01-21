const webdriver = require('selenium-webdriver');

const By = webdriver.By;
const until = webdriver.until;

module.exports = driver => ({
  name: 'Authentication',
  description: 'should be passed successfully',
  worker: (done) => {
    driver.get('https://courses.edx.org/login')
                .then(() => driver.findElement(By.id('login-email')).sendKeys('dhavrosh@gmail.com'))
                .then(() => driver.findElement(By.id('login-password')).sendKeys('641076Dan'))
                .then(() => driver.findElement(By.className('login-button')).click())
                .then(() => driver.wait(until.titleIs('Dashboard | edX'), 5000))
                .then(() => done())
                .catch(done);
  },
});
