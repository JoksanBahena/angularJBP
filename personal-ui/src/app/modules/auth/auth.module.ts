import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { SigninComponent } from './pages/signin/signin.component';
import { materialModules } from 'src/app/types/material-modules';



@NgModule({
  declarations: [
    SigninComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ...materialModules,
  ],
  exports: [SigninComponent]
})
export class AuthModule { }
