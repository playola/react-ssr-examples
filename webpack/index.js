// Enables ES6 features for the server side.
require('@babel/register')({ presets: ['@babel/preset-env'] });
require('./src/server');
