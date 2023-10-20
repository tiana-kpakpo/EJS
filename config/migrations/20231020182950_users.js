/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 * 
 * 
 */
exports.up = function (knex) {

    return knex.schema.createTable('user', table => {
        table.increments('id').primary();
        table.string('email');
        table.string('username');
        table.timestamps(true, true);

    }).then(() => {
        console.log(' "user" table created');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('user');

};