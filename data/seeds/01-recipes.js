exports.seed = function(knex, Promise) {
    return knex('recipes').insert([   
      { recipe_name: 'strawberry milkshake' },
      { recipe_name: 'steak' }
    ]);
  };
  