import { SharedModule } from './../shared/shared.module';
import { SelectRecipeComponent } from './select-recipe/select-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RecipesRoutingModule } from './recipes-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
        EditRecipeComponent,
        SelectRecipeComponent
    ],
    imports: [
        CommonModule,
        RecipesRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class RecipesModule { }