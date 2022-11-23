import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPersonalComponent } from './pages/main-personal/main-personal.component';
import { AddPersonalComponent } from './pages/add-personal/add-personal.component';
import { materialModules } from 'src/app/types/material-modules';

@NgModule({
  declarations: [
    MainPersonalComponent,
    AddPersonalComponent
  ],
  imports: [
    CommonModule,
    ...materialModules
  ]
})
export class PersonalModule { }
