import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { SocialPageRoutingModule } from './social-routing.module';

import { SocialPage } from './social.page';

import { TestComponentModule } from '../../components/footer/footer.component.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SocialPageRoutingModule,
    TestComponentModule,
    TranslateModule
  ],
  declarations: [SocialPage]
})
export class SocialPageModule {}
