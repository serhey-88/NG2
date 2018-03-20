import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ProductsService } from './../services/products.service';
import { CartService } from '../services/cart.service';

@NgModule({
    imports: [
        CommonModule,
        CartItemComponent
    ],
    declarations: [
        CartComponent,
        CartItemComponent
    ],
    providers: [CartService],
    exports: [
        CartComponent,
        CartItemComponent
    ]
})
export class CartModule {}
