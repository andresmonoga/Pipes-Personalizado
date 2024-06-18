import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';
import { ProductsRoutingModule } from './products/products-routing.module';

//CONFIGURACIONES DE LOCALES DE LA APP
import localesESCO from "@angular/common/locales/es-CO";
import localesFrCA from "@angular/common/locales/fr-CA";


import {registerLocaleData } from "@angular/common";

registerLocaleData( localesESCO );
registerLocaleData( localesFrCA );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
   ProductsModule,
   SharedModule,
   ProductsRoutingModule,


  ],
  providers: [
    {
      provide: LOCALE_ID,useValue :'es-CO'

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
