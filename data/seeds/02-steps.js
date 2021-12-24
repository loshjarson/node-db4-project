
exports.seed = function(knex) {
  return knex('steps').insert([
    {step_number: 1, instructions: 'put all ingredients in blender', recipe_id: 1},
    {step_number: 2, instructions: 'blend until smooth', recipe_id: 1},
    {step_number: 3, instructions: 'pour and drizzle chocolate syrup', recipe_id: 1},
    {step_number: 1, instructions: 'melt butter and sear steak', recipe_id: 2},
    {step_number: 2, instructions: 'place steak in oven', recipe_id: 2},
    {step_number: 3, instructions: 'remove from oven and serve', recipe_id: 2}
  ]);
};
