import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
 selector: 'app-recipe-list',
 templateUrl: './recipe-list.component.html',
 styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://assets.bonappetit.com/photos/5c2f8fe26558e92c8a622671/1:1/w_2700,h_2700,c_limit/bolognese-1.jpg'),
    new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://assets.bonappetit.com/photos/5c2f8fe26558e92c8a622671/1:1/w_2700,h_2700,c_limit/bolognese-1.jpg'),
    new Recipe('A Test Recipe 3', 'This is simply a test 3', 'https://assets.bonappetit.com/photos/5c2f8fe26558e92c8a622671/1:1/w_2700,h_2700,c_limit/bolognese-1.jpg')
  ];
    @Output() recipeWasSelected = new EventEmitter<Recipe>();
    constructor() { }
    ngOnInit(): void {
    }
    onRecipeSelected(recipe: Recipe)
   {
    this.recipeWasSelected.emit(recipe);
    }
   }

 