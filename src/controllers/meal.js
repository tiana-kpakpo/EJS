const knex = require('../../config/db')

const mealController = {
    landingPage: async (req, res) => {
        try {
            let user = req.body.username;

            if (!user) {
                res.redirect('/login')
            }
            else {
                let cuisine = ['Gluten Free', 'Ketogenic', 'Vegetarian', 'Pescetarian'];

                const meals = await knex('meal').select('*').orderBy('id', 'desc');
                console.log(meals);

                if (!meals) {
                    res.render('pages/notFound', {
                        title: 'Not Found',
                        user: user
                    })
                }

                res.render('pages/home', {
                    title: 'Feast & Frolic',
                    user: user,
                    kitchen: cuisine,
                    meal: meals
                })
            }

        } catch (error) {
            console.error(error)

        }

    },

    getMeal: (req, res) => {
        res.render('pages/meal', {
            title: 'Meals',
        })
    },
    deleteMeal: (req, res) => {
        res.render('pages/meal', {
            title: 'Meal'
        })
    }
}

module.export = mealController;