const webdriver = require('selenium-webdriver');

const By = webdriver.By;

module.exports = driver => ({
  name: 'Courses',
  description: 'should be find successfully',
  worker: (done) => {
    driver.get('https://www.edx.org/course')
            .then(() => driver.findElement(By.css('div#content header.search-header input.edit-search-query'))
                .sendKeys('testing software'))
            .then(() => driver.findElement(By.css('div#content header.search-header button.form-submit')).click())
            .then(() => driver.executeScript('window.scrollTo(0, 1000)'))
            .then(() => driver.sleep(1000))
            .then(() => driver.findElements(By.css('div.course-card')))
            .then((courses) => {
              console.log(`\tWere founded: ${courses.length}`);

              return Promise.all(courses.map(course => course.findElement(By.css('div.availability')).getAttribute('innerHTML')));
            })
            .then((statuses) => {
              let avaliable = 0;

              statuses.forEach((status) => {
                const availability = status.match(/<\/span>(.*)/)[1];

                if (availability === 'Upcoming') avaliable += 1;
              });

              console.log(`\tAre open for registration: ${avaliable}`);
              done();
            })
            .catch(done);
  },
});
