import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tab5', loadChildren: './tab5/tab5.module#Tab5PageModule' },
  { path: 'team', loadChildren: './tab1/team/team.module#TeamPageModule' },
  { path: 'partners', loadChildren: './tab1/partners/partners.module#PartnersPageModule' },
  { path: 'rechnungswesen', loadChildren: './tab2/rechnungswesen/rechnungswesen.module#RechnungswesenPageModule' },
  { path: 'lohnbuchhaltung', loadChildren: './tab2/lohnbuchhaltung/lohnbuchhaltung.module#LohnbuchhaltungPageModule' },
  { path: 'abschlussarbeiten', loadChildren: './tab2/abschlussarbeiten/abschlussarbeiten.module#AbschlussarbeitenPageModule' },
  { path: 'steuerlicheberatung', loadChildren: './tab2/steuerlicheberatung/steuerlicheberatung.module#SteuerlicheberatungPageModule' },
  { path: 'impressum', loadChildren: './tab5/impressum/impressum.module#ImpressumPageModule' },
  { path: 'datenschutz', loadChildren: './tab5/datenschutz/datenschutz.module#DatenschutzPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
