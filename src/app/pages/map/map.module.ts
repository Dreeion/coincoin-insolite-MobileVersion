import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapPageRoutingModule } from './map-routing.module';

import { MapPage } from './map.page';

import { TestComponentModule } from '../footer/footer.component.module';

import { DynamicMapComponent } from '../../components/dynamic-map/dynamic-map.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapPageRoutingModule,
    TestComponentModule
  ],
  declarations: [MapPage,DynamicMapComponent],
  exports : [DynamicMapComponent]
})
export class MapPageModule {}
