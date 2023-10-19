const router = require('express').Router();
const knex = require('../config/db');
const User = require('../src/controllers/user');

router.post('/v1/loginUser', (req, res) => {
    User.getUser(req, res);
});

router.get('/v1/allUsers', (req, res) => {
    User.getAllUsers(req, res);
});

router.get('sandbox', (req, res) => {
    res.send('this is a sandbox')
});

router.get('/v1/getMeals', async(req, res) => {
      const meals = await knex('meal').select('*').orderBy('id', 'desc');
      res.status(200).json({meal: meals});
});







module.exports = router;