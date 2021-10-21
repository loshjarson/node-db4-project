
exports.seed = function(knex) {
  return knex('ingredients').insert([
    {step_name: 'potatoes', step_id: 1},
    {step_name: 'beef', step_id: 2},
    {step_name: 'ketchup', step_id: 3},
    {step_name: 'lettuce', step_id: 4},
    {step_name: 'caeser dressing', step_id: 4},
    {step_name: 'croutons', step_id: 5}
  ]);
};