// Use this file to change prototype configuration.

// Note: prototype config can be overridden using environment variables (eg on heroku)

module.exports = {
  serviceName: '',
  practiceName: 'Street Lane Practice',
  practiceAddress: [
    '12 Devonshire Avenue',
    'Roundhay',
    'Leeds'
  ],
  practicePostcode: 'LS8 1AY',

  // Default port that prototype runs on
  port: '8000',

  // Enable or disable password protection on production
  useAuth: 'true',

  // Force HTTP to redirect to HTTPs on production
  useHttps: 'true',

  // Cookie warning - update link to service's cookie page.
  cookieText: 'We use cookies to make this site simpler. <a href="#" title="Find out more about cookies">Find out more about cookies</a>',

  // Register with a GP prototype URL.
    regwithGPURL: 'https://register-with-a-gp-prototypes.herokuapp.com/mvp-v1.2/start'


}
