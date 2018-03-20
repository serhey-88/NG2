import { Injectable } from '@angular/core';

import { Product } from './../models/product.model';

@Injectable()
export class ProductsService {
    getProduct(): Product {
        return new Product('prod 1', 'desc 1', 50, true);
    }

    getProducts(): Array<Product> {
        return [
            new Product('prod 1', 'desc 1', 50, true),
            new Product('prod 3', 'desc 3', 40, true),
            new Product('prod 4', 'desc 4', 250, true),
            new Product('prod 2', 'desc 2', 500, false)
        ];
    }
}
