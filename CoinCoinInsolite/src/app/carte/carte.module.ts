import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartePageRoutingModule } from './carte-routing.module';

import { CartePage } from './carte.page';

import { TestComponentModule } from '../footer/footer.component.module';

import { DynamicMapComponent } from '../dynamic-map/dynamic-map.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartePageRoutingModule,
    TestComponentModule
  ],
  declarations: [CartePage,DynamicMapComponent],
  exports : [DynamicMapComponent]
})
export class CartePageModule {}
