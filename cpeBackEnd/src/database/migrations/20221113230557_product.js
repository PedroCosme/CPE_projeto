/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('product', function(table){
        table.string('product_id').primary().notNullable();
        table.string('name').notNullable();
        table.string('description').notNullable();
      });
    };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('product');
};