import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../models/product.model';
import { CartService } from '../../../services/cart.service';

enum Category { Ready, HandMade}

@Component({
    selector: 'app-product-component',
    templateUrl: 'product.component.html'
})
export class ProductComponent {
    @Input() product: Product;
    // @Output() buy: EventEmitter<Product> = new EventEmitter<Product>();

    constructor(public cartService: CartService) {}

    onBuy(): void {
        console.log('The product was bought');
        // this.buy.emit(this.product);
        // this.cartService.addToCart(this.product);
    }
}
