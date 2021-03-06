import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemOutputComponent } from './item-output/item-output.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { InTheMetadataComponent } from './in-the-metadata/in-the-metadata.component';
import { AliasingComponent } from './aliasing/aliasing.component';
import { BryceApp } from './bryce-seefieldt/bryce-seefieldt.component';

@NgModule({
  declarations: [
    AppComponent,
    BryceApp,
    ItemDetailComponent,
    ItemOutputComponent,
    InputOutputComponent,
    InTheMetadataComponent,
    AliasingComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
