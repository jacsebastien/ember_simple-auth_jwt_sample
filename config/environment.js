/* jshint node: true */

module.exports = function (environment) {
    var ENV = {
        modulePrefix: 'ember-simple-auth-jwt-sample',
        environment: environment,
        baseURL: '/',
        rootURL: 'http://localhost:3000',
        apiUrl: 'http://localhost:3000/api/',
        locationType: 'auto',
        EmberENV: {
            FEATURES: {
            // Here you can enable experimental features on an ember canary build
            // e.g. 'with-controller': true
            }
        },

        APP: {
            // Here you can pass flags/options to your application instance
            // when it is created
        }
    };
    ENV['ember-simple-auth'] = {
        store: 'ember_simple_auth-session-store:local-storage',
        authorizer: 'authorizer:custom',
        crossOriginWhitelist: ['http://localhost:3001/'],
        routeAfterAuthentication: '/index'
    };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
