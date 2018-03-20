import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './products-list/product/product.component';
import { ProductsListComponent} from './products-list/product-list.component';
import { ProductsService } from './../services/products.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ProductComponent,
        ProductsListComponent
    ],
    providers: [ProductsService],
    exports: [
        ProductComponent,
        ProductsListComponent
    ]
})
export class ProductModule {}
