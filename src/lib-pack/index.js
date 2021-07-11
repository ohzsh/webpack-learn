if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/test-library');
} else {
  module.exports = require('./dist/test-library.min');
}
