import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from 'src/app/modules/material/material.module';

import { AppComponent } from './app.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavtabsComponent } from './components/favtabs/favtabs.component';

@NgModule({
  declarations: [AppComponent, SearchboxComponent, FavtabsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
