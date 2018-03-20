import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
    providers: [CartService]
})
export class CartComponent implements OnInit {
    @Output() remove: EventEmitter<Product> = new EventEmitter<Product>();
    cartIsNotEmpty: boolean;
    products: Array<Product>;

    constructor(public cartService: CartService) {}

    @HostListener('mouseenter', ['$event']) onMouseEnter(event) {
        this.cartIsNotEmpty = this.cartIsNotEmpty ? false : true;
    }

    ngOnInit() {
        this.products = this.cartService.getList();
        this.cartIsNotEmpty = Boolean(this.products && this.products.length);
    }
}
