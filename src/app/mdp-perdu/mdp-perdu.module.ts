import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MdpPerduPageRoutingModule } from './mdp-perdu-routing.module';

import { MdpPerduPage } from './mdp-perdu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MdpPerduPageRoutingModule
  ],
  declarations: [MdpPerduPage]
})
export class MdpPerduPageModule {}
