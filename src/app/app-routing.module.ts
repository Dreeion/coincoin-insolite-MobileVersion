import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pages/home', pathMatch: 'full' },
  { path: 'pages/home',
   loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'galerie',
    loadChildren: () => import('./pages/galerie/galerie.module').then( m => m.GaleriePageModule)
  },
  {
    path: 'carte',
    loadChildren: () => import('./pages/carte/carte.module').then( m => m.CartePageModule)
  },
  {
    path: 'cgu',
    loadChildren: () => import('./pages/cgu/cgu.module').then( m => m.CGUPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./pages/inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'mdp-perdu',
    loadChildren: () => import('./pages/mdp-perdu/mdp-perdu.module').then( m => m.MdpPerduPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
