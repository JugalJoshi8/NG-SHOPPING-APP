import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    @Output() recipeSelected: EventEmitter<Recipe> = new EventEmitter();
    recipes: Recipe[] = [
    new Recipe('test name', 'test desc', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'),
    new Recipe('test name2', 'test desc2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJvVWsE2rF9puDjxp0OZAeIP_dtzoZnIzrJF4sKE6xTnrUzxr8')

  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelect(recipe) {
    this.recipeSelected.emit(recipe);
  }

}
