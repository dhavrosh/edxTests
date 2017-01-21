const sites = [
  'http://www.w3schools.com/',
  'https://nodejs.org/en/',
  'https://www.npmjs.com/',
];

module.exports = driver => ({
  name: 'Cookies',
  description: 'should be deleted successfully',
  worker: (done) => {
    Promise.all(sites.map(site => driver.get(site)
        .then(() => driver.manage().deleteAllCookies())
        .then(() => driver.manage().getCookies())
        .then(cookies => console.log('\t', site, cookies))))
        .then(() => done())
        .catch(done);
  },
});
