import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductModule } from './components/product-component/product.module';
import { CartComponent } from './components/cart/cart.component';
import { CartModule } from './components/cart/cart.module';
import { CartService } from './components/services/cart.service';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';


@NgModule({
    declarations: [
        AppComponent,
        CartComponent,
        CartItemComponent
    ],
    imports: [
        BrowserModule,
        ProductModule
    ],
    providers: [CartService],
    bootstrap: [AppComponent]
})
export class AppModule { }
