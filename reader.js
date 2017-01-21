const fs = require('fs');
const Promise = require('bluebird');

const readdir = Promise.promisify(fs.readdir);

module.exports = (dir, driver) => readdir(dir)
    .then(files => files.map((file) => {
      const createTest = require(`${dir}/${file}`);
      return createTest(driver);
    }));
