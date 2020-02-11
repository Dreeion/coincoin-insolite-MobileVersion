import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',
   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'galerie',
    loadChildren: () => import('./galerie/galerie.module').then( m => m.GaleriePageModule)
  },
  {
    path: 'carte',
    loadChildren: () => import('./carte/carte.module').then( m => m.CartePageModule)
  },
  {
    path: 'cgu',
    loadChildren: () => import('./cgu/cgu.module').then( m => m.CGUPageModule)
  },  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'mdp-perdu',
    loadChildren: () => import('./mdp-perdu/mdp-perdu.module').then( m => m.MdpPerduPageModule)
  },  {
    path: 'opportunity',
    loadChildren: () => import('./opportunity/opportunity.module').then( m => m.OpportunityPageModule)
  },
  {
    path: 'curiosity',
    loadChildren: () => import('./curiosity/curiosity.module').then( m => m.CuriosityPageModule)
  },
  {
    path: 'favoris',
    loadChildren: () => import('./favoris/favoris.module').then( m => m.FavorisPageModule)
  }





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
