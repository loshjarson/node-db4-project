
exports.seed = function(knex) {
  return knex('steps').insert([
    {step_number: 1, step_name: 'mix', recipe_id: 1},
    {step_number: 2, step_name: 'set', recipe_id: 1},
    {step_number: 3, step_name: 'cook', recipe_id: 1},
    {step_number: 1, step_name: 'get ingredients', recipe_id: 2},
    {step_number: 2, step_name: 'combine ingredients', recipe_id: 2},
    {step_number: 3, step_name: 'serve', recipe_id: 2}
  ]);
};
