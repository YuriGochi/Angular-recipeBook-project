import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model'

export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe [] = [
    new Recipe('A Test Recipe', 'This is  simply a test', 'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg?resize=640%2C360&ssl=1'),
    new Recipe('A Testt', 'This is  test', 'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg?resize=640%2C360&ssl=1')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

constructor() { }

}
