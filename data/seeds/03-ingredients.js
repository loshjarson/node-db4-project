
exports.seed = function(knex) {
  return knex('ingredients').insert([
    {step_name: 'lettuce', step_id: 1},
    {step_name: 'beef', step_id: 1},
    {step_name: 'ketchup', step_id: 1},
    {step_name: '', step_id: 2},
    {step_name: '', step_id: 2},
    {step_name: 'serve', step_id: 2}
  ]);
};