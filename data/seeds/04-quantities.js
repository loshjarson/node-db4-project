
exports.seed = function(knex) {
  return knex('quantities').insert([
    {quantity: '1 cup', ingredient_id: 1, step_id: 1},
    {quantity: '2 cups', ingredient_id: 2, step_id: 1},
    {quantity: '1 cup', ingredient_id: 3, step_id: 1},
    {quantity: '2 tbsp', ingredient_id: 4, step_id: 1},
    {quantity: '3 tbsp', ingredient_id: 5, step_id: 4},
    {quantity: '2', ingredient_id: 6, step_id: 4}
  ]);
};
