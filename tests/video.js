const webdriver = require('selenium-webdriver');

const By = webdriver.By;

module.exports = driver => ({
    name: 'Video',
    description: 'should be played successfully',
    worker: (done) => {
        driver.get('https://www.edx.org/micromasters/michiganx-user-experience-ux-research-and-design')
            .then(() => driver.manage().window().maximize())
            .then(() => driver.findElement(By.css('.banner .video-wrapper button.play-btn')).click())
            .then(() => driver.sleep(2000))
            .then(() => driver.findElement(By.css('.banner .video-wrapper iframe')))
            .then((frame) => driver.switchTo().frame(frame))
            .then(() =>  driver.findElement(By.css('.ytp-chrome-controls .ytp-time-duration')).getAttribute('innerHTML'))
            .then(duration => console.log(`\tDuration: ${duration}`))
            .then(() => done())
            .catch(done);
    },
});
