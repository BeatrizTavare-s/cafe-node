const CafeController = require('../controllers/cafeController');

module.exports = (app) => {
  app.get('/cafe', CafeController.get);
};
