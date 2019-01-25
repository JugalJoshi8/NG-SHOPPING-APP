import { NgModule } from '@angular/core';
import { SelectRecipeComponent } from './select-recipe/select-recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AuthGuard } from './../auth/auth-guard.service';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { RecipesComponent } from './recipes.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
    {path: '', component: RecipesComponent, children: [
        {path: 'new', component: EditRecipeComponent, canActivate: [AuthGuard]},
        {path: ':id/edit', component: EditRecipeComponent, canActivate: [AuthGuard]},
        {path: ':id', component: RecipeDetailComponent},
        {path: "", component: SelectRecipeComponent}
      ]},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule {}