
exports.seed = function(knex) {
  return knex('steps').insert([
    {step_number: 1, instructions: 'mix', recipe_id: 1},
    {step_number: 2, instructions: 'set', recipe_id: 1},
    {step_number: 3, instructions: 'cook', recipe_id: 1},
    {step_number: 1, instructions: 'get ingredients', recipe_id: 2},
    {step_number: 2, instructions: 'combine ingredients', recipe_id: 2},
    {step_number: 3, instructions: 'serve', recipe_id: 2}
  ]);
};
