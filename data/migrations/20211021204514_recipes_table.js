exports.up = function(knex) {
    return knex.schema
      .createTable('recipes', tbl => {
          tbl.increments('recipe_id');
          tbl.string('recipe_name',128).notNullable();
          tbl.timestamps(true,true);
      })
      .createTable('ingredients', tbl => {
          tbl.increments('ingredient_id');
          tbl.string('name').notNullable().unique();
      })
      .createTable('steps', tbl => {
          tbl.increments('step_id');
          tbl.integer('step_number')
          tbl.text('instructions').notNullable();
          tbl.integer('recipe_id')
              .unsigned()
              .notNullable()
              .references('recipe_id')
              .inTable('recipes')
              .onUpdate('CASCADE')
              .onDelete('RESTRICT')
      })
      .createTable('quantities', tbl => {
          tbl.integer('step_id')
              .unsigned()
              .notNullable()
              .references('step_id')
              .inTable('steps')
              .onUpdate('CASCADE')
              .onDelete('RESTRICT')
          tbl.integer('ingredient_id')
              .unsigned()
              .notNullable()
              .references('ingredient_id')
              .inTable('ingredients')
              .onUpdate('CASCADE')
              .onDelete('RESTRICT')
          tbl.primary(['step_id', 'ingredient_id'])
          tbl.string('quantity').notNullable()
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('quantities')
      .dropTableIfExists('instructions')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('recipes')
  };