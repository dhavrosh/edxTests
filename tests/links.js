const webdriver = require('selenium-webdriver');

const By = webdriver.By;
const until = webdriver.until;

module.exports = driver => ({
    name: 'Links',
    description: 'should be opened successfully',
    worker: (done) => {
        driver.get('https://www.edx.org/')
            .then(() => driver.findElement(By.css('a[href="/school/harvardx"]')).click())
            .then(() => driver.wait(until.titleIs('HarvardX - Free Courses from Harvard University | edX'), 5000))
            .then(() => driver.navigate().back())
            .then(() => driver.wait(until.titleIs("edX | Free online courses from the world's best universities"), 5000))
            /*.then(() => driver.findElement(By.css('a[href="verified-certificate"]')).click())
            .then(() => driver.wait(until.titleIs('Verified Certificate | edX'), 5000))*/
            .then(() => done())
            .catch(done);
    },
});
