import { NgModule } from "@angular/core";
import { AppDropdown } from './dropdown.directive';

@NgModule({
    declarations: [AppDropdown],
    exports: [AppDropdown]
})
export class SharedModule {}