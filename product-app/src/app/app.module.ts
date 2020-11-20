import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule  } from '@angular/material/autocomplete';
import { MatChipsModule  } from '@angular/material/chips';
import { MatFormFieldModule  } from '@angular/material/form-field';
//
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { ProductRowComponent } from './components/product-row/product-row.component';
import { ProductImageComponent } from './components/product-image/product-image.component';
import { PriceDisplayComponent } from './components/price-display/price-display.component';
import { ProductDepartmentComponent } from './components/product-department/product-department.component';
import { DemoFormSkuComponent } from './components/forms/demo-form-sku/demo-form-sku.component';
import { DemoReactiveSkuComponent } from './components/forms/demo-reactive-sku/demo-reactive-sku.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    ListProductComponent,
    ProductRowComponent,
    ProductImageComponent,
    PriceDisplayComponent,
    ProductDepartmentComponent,
    DemoFormSkuComponent,
    DemoReactiveSkuComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    MatIconModule, MatInputModule,
    MatAutocompleteModule, MatChipsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
