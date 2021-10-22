
exports.seed = function(knex) {
  return knex('ingredients').insert([
    {name: 'potatoes'},
    {name: 'beef'},
    {name: 'ketchup'},
    {name: 'lettuce'},
    {name: 'caeser dressing'},
    {name: 'croutons'}
  ]);
};