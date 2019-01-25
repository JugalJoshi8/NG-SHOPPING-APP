import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
const routes : Routes = [
    {path: 'signin', component: SigninComponent},
    {path: 'signup', component: SignupComponent}   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}