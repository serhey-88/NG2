import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';

@Component({
    selector: 'app-products-list',
    templateUrl: 'products-list.component.html'
})
export class ProductsListComponent implements OnInit {
    productsList: Array<Product>;

    constructor(public productsService: ProductsService) {}

    ngOnInit() {
        this.productsList = this.productsService.getProducts();
    }
}
