import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
@NgModule({
    declarations: [
        SignupComponent,
        SigninComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        AuthRoutingModule
    ]
})
export class AuthModule {}