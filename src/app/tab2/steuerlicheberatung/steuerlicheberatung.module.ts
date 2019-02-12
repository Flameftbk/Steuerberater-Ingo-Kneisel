import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SteuerlicheberatungPage } from './steuerlicheberatung.page';

const routes: Routes = [
  {
    path: '',
    component: SteuerlicheberatungPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SteuerlicheberatungPage]
})
export class SteuerlicheberatungPageModule {}
