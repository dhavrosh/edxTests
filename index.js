const createDriver = require('./driver');
const createReader = require('./reader');

const browser = process.env.BROWSER || 'chrome';
const driver = createDriver(browser);

let tests;

before((done) => {
  createReader('./tests', driver).then((data) => {
    tests = data;
    done();
  }).catch(done);
});

describe('edX', () => {
  it('all tests are scraped successfully', () => {
    tests.forEach((test) => {
      describe(test.name, () => {
        it(test.description, test.worker);
      });
    });
  });
});

