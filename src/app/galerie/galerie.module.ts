import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleriePageRoutingModule } from './galerie-routing.module';

import { GaleriePage } from './galerie.page';

import { TestComponentModule } from '../footer/footer.component.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaleriePageRoutingModule,
    TestComponentModule
  ],
  declarations: [GaleriePage]
})
export class GaleriePageModule {}
