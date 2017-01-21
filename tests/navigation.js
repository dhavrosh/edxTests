module.exports = driver => ({
  name: 'Navigation',
  description: 'should work successfully',
  worker: (done) => {
    console.log('\tLast 5 urls:');

    Promise.all(Array(...Array(5)).map(() => driver.getCurrentUrl().then((url) => {
      console.log(`\t - ${url}`);

      return driver.navigate().back();
    })))
    .then(() => done())
    .catch(done);
  },
});
