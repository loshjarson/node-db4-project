const db = require('../data/db-config.js');

const getRecipeByID = async(recipe_id) => {
    const recipe = await db.select('r.recipe_id','r.recipe_name','r.created_at').from("recipes as r").where({recipe_id}).first();
    const steps = await db("steps").where({recipe_id});
    return {
        ...recipe,
        steps: await Promise.all(steps.map(async(step)=>{
            const ingredients = await db.select("name","quantity")
                .from("ingredients as i")
                .join("quantities","quantities.ingredient_id","i.ingredient_id")
                .join("steps as s","quantities.step_id","s.step_id")
                .where("s.step_id",step.step_id)
            return {
                step_number:step.step_number,
                instructions:step.instructions,
                ingredients
            }
        }))
    }
};

module.exports = {
    getRecipeByID,
}