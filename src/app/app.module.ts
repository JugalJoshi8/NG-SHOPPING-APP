import { SharedModule } from './shared/shared.module';
import { AuthGuard } from './auth/auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditItemComponent } from './shopping-list/shopping-edit-item/shopping-edit-item.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import {RecipesService} from './recipes/recipes.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { RecipesModule } from './recipes/recipes.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditItemComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RecipesModule,
    SharedModule
  ],
  providers: [ShoppingListService, RecipesService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
