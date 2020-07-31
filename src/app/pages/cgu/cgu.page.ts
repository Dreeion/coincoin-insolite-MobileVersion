import { Component, OnInit } from '@angular/core';

import { Location } from "@angular/common";
@Component({
  selector: 'app-cgu',
  templateUrl: './cgu.page.html',
  styleUrls: ['./cgu.page.scss'],
})
export class CGUPage implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

  myBackButton(){
    this.location.back();
  }

}
