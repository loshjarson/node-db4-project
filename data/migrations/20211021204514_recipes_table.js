
exports.up = function(knex) {
    return knex.schema
    .createTable("recipes",tbl=>{
        tbl.increments("recipe_id")
        tbl.string("recipe_name").notNullable().unique()
        tbl.timestamp("created_at")
    })
    .createTable("steps",tbl=>{
        tbl.increments("step_id")
        tbl.integer("step_number").notNullable()
        tbl.string("step_instructions",128).notNullable()
        tbl.integer("recipe_id")
            .unsigned()
            .notNullable()
            .references("recipe_id")
            .inTable("recipes")
            .onDelete("RESTRICT")

    })
    .createTable("ingredients",tbl=>{
        tbl.increments("ingredient_id")
        tbl.string("ingredient_name",128).notNullable()
        tbl.integer("step_id")
            .unsigned()
            .notNullable()
            .references("step_id")
            .inTable("steps")
            .onDelete("RESTRICT")
    })
    .createTable("quantities",tbl=>{
        tbl.increments("quantity_id")
        tbl.string("quantity")
        tbl.integer("ingredient_id")
            .unsigned()
            .notNullable()
            .references("ingredient_id")
            .inTable("ingredients")
            .onDelete("RESTRICT")
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("quantities")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes")
};
