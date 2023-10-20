/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {

    return knex.schema.createTable('meal', table => {
        table.increments('id').primary();
        table.string('name');
        table.string('description');
        table.integer('price');
        table.string('image');
        table.boolean('is_vegetarian').defaultTo(false);
        table.timestamps(true, true);
    }).then(() => {
        console.log(' "meal" table created');
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

    return knex.schema.dropTable('meal');
};
