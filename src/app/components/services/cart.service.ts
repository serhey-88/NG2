import { Injectable } from '@angular/core';

import { Product } from '../models/product.model';

@Injectable()
export class CartService {
    addToCart(product: Product): Product {
        return product;
    }

    getList(): Array<Product> {
        return [
            new Product('name 1', 'desc', 50, true),
            new Product('name 2', 'desc', 55, true)
        ];
    }
}
