const knex = require('knex');
const knexfile = require('./knexfile');

//establish db connection

const db = knex(knexfile.development);

async function create_user_table() {
    const tableExists = await db.schema.hasTable('todo');
    
        if(!tableExists) {
    
           return db.schema.createTable('users', (table) => {
                table.increments('id').primary();
                table.string('name').notNullable();
                table.string('email').notNullable();
                table.string('username').notNullable();
                table.timestamps(true) (true);
                }).then(() => {
                console.log('"user" table created');
                });
                }
    }
async function create_meals_table() {
    const tableExists = await db.schema.hasTable('meals');
    
        if(!tableExists) {
    
            return knex.schema.createTable('meals', table => {
                table.increments('id').primary();
                table.string('name');
                table.string('description');
                table.integer('price');
                table.string('image');
                table.boolean('is_vegetarian').defaultTo(false);
                table.timestamps(true, true);
                }).then(() => {
                console.log('"meals" table created');
                });
                }
    }

//  db.raw('CREATE DATABASE IF NOT EXISTS menuplus').then(function () {
//         console.log('database created successfully')
//         return db.destroy();   
//     })

    create_user_table();
    create_meals_table();

module.exports = db;


