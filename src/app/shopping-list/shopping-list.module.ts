import { CommonModule } from '@angular/common';
import { ShoppingEditItemComponent } from './shopping-edit-item/shopping-edit-item.component';
import { ShoppingListComponent } from './shopping-list.component';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditItemComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class ShoppingListModule {

}