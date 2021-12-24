
exports.seed = function(knex) {
  return knex('ingredients').insert([
    {name: 'strawberries'},
    {name: 'milk'},
    {name: 'ice cream'},
    {name: 'chocolate syrup'},
    {name: 'butter'},
    {name: 'steak'}
  ]);
};