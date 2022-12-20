import { Component } from '@angular/core';

import { products } from '../products';

import { Game } from '../game';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  game = new Game('title1', 123);

  share() {
    window.alert(this.game.identify());
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
