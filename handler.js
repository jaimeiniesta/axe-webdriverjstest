const wd = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const Axe = require('axe-webdriverjs')

// Build a Chrome service, ensuring the correct path to ChromeDriver is set
// Download from https://chromedriver.storage.googleapis.com/index.html?path=2.40/
const service = new chrome.ServiceBuilder(
  './bin/chromedriver'
).build()
chrome.setDefaultService(service)

// Create our WebDriver instance
const webdriver = new wd.Builder()
  .forBrowser('chrome')
  .withCapabilities(wd.Capabilities.chrome())
  .build()

const axe = new Axe(webdriver)

// Get the page
url = "http://example.com"

webdriver.get(url).then(() => {
  // Run axe-core
  axe.analyze(results => {
    console.log(results)
  })
}).catch(err => {
  console.log("pues un error")
})
