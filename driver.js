const webdriver = require('selenium-webdriver');
const drivers = require('./config').drivers;

module.exports = (browser) => {
  require(drivers[browser].moduleName);

  console.log(`Starting with ${browser} driver...`);

  return new webdriver.Builder()
        .forBrowser(drivers[browser].browserName).build();
};
