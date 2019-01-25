import { RecipesService } from './../recipes/recipes.service';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { AppRoutingModule } from './../app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule
    ],
    exports: [
        HeaderComponent,
        HomeComponent,
        AppRoutingModule
    ],
    providers: [
        ShoppingListService,
        RecipesService
    ],
})
export class CoreModule { }