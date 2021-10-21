exports.seed = function(knex, Promise) {
    return knex('zoos').insert([   
      { recipe_name: 'Meatloaf' },
      { recipe_name: 'Salad' }
    ]);
  };
  