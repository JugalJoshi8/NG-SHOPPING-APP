import { HomeComponent } from './core/home/home.component';
import { RouterModule, Routes, PreloadAllModules} from '@angular/router';
import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes : Routes = [
    {path: 'shopping-list', component: ShoppingListComponent},
    {path: '', component: HomeComponent},
    {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {}