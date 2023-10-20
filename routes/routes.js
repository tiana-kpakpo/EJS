const router = require('express').Router();
const knex = require('../config/db');
const User = require('../src/controllers/user');

const Meal = require('../src/controllers/meal');
const Order = require('../src/controllers/order');

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

router.post('/v1/getOrder/:id', async(req, res) => {
      const meals = await knex('meals').select('*').orderBy('id', 'desc');
      res.status(200).json({meal: meals});
});


//orders
router.get('/v1/getOrders/:username',  (req, res) => {
    Order.getOrders(req, res)})

//get single order
router.get('/v1/get-order/:username/:orderId', (req, res) =>{
Order.getOrderById(req, res)})

router.post('/v1/createOrder', (req, res) =>{
Order.createOrder(req,res) });

router.delete('/v1/deleteOrder/:id', (req,res) =>{
Order.deleteOrder(req,res)})

//delete all orders
router.delete('/v1/deleteAllOrders', (req, res) => {

    Order.deleteAllOrders(req,res)})


router.patch('/v1/updateOrder/:id', (req, res) =>{
Order.updateOrder(req, res) })

router.get('/test-end',  (req,res) => {

    Order.test(req,res)})


//meals
router.get('/v1/getMeal/:id', (req,res) => {
Meal.getMealById (req,res)})

// router.post('/v1/createMeal', Meal.createMeal)
// router.delete('/v1/deleteMeal/:id', Meal.deleteMeal)
// router.patch('/v1/updateMeal/:id', Meal.updateMeal)
// router.get('/test-meal',  Meal.test)
// router.get('/test-meal-order/:username',  Meal.getOrders)


module.exports = router;