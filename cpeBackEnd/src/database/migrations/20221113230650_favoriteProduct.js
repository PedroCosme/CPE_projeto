/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("favoriteProd", function (table) {
    table.string("favoriteProd_id").primary().notNullable();
    table.string("user_id").notNullable();
    table.string("name").notNullable();
    table
      .foreign("user_id")
      .references("user_id")
      .inTable("user")
      .onDelete("cascade");
    table.string("product_id").notNullable();
    table
      .foreign("product_id")
      .references("product_id")
      .inTable("product")
      .onDelete("cascade");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("favoriteProd");
};
