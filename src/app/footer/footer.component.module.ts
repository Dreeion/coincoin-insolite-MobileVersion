import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class TestComponentModule {}