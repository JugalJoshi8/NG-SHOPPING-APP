import { Component, OnInit } from '@angular/core';
import {RecipesService} from './../recipes/recipes.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    
  }

  saveRecipes() {
    this.recipeService.saveRecipes();
  }

  fetchRecipes() {
    this.recipeService.fetchRecipes();
  }

}
