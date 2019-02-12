import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AbschlussarbeitenPage } from './abschlussarbeiten.page';

const routes: Routes = [
  {
    path: '',
    component: AbschlussarbeitenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AbschlussarbeitenPage]
})
export class AbschlussarbeitenPageModule {}
