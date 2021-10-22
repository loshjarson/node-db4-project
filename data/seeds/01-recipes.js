exports.seed = function(knex, Promise) {
    return knex('recipes').insert([   
      { recipe_name: 'Meatloaf' },
      { recipe_name: 'Salad' }
    ]);
  };
  