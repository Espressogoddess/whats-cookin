import Recipe from "./Recipe";

class RecipeRepository {
  constructor(recipeData) {
    this.recipes = recipeData.map(recipe => new Recipe(recipe));
    // this.filteredRecipes;
  }
  
  addRecipe(recipeToAdd) {
    if (!this.recipes.find(recipe => recipe.id === recipeToAdd.id)) {
      this.recipes.push(new Recipe(recipeToAdd));
    }  
  }
  removeRecipe(recipeId) {
    this.recipes = this.recipes.filter(recipe => recipeId !== recipe.id);

  }
  filterByTag(tag) {
    // for(var i = 0; i < tag.length; i++) {
    //   if (!tag[i]) {
    //     return;
    //   }
      this.filteredRecipes = this.recipes.filter(recipe => recipe.tags.includes(tag));

      if (this.filteredRecipes.length === 0) {
        this.filteredRecipes = null;
        return
      } else {
        return this.filteredRecipes;
      }
    // }
  }
  filterByName(name) {
    if (!name) {
      return;
    } 
    this.filteredRecipes = this.recipes.filter(recipe => (recipe.name.toUpperCase().includes(name.toUpperCase())));
    if (this.filteredRecipes.length === 0) {
      this.filteredRecipes = null;
      return
    }
    return this.filteredRecipes
  }
}
export default RecipeRepository;