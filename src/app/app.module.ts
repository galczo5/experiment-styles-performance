import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListItemRendererComponent } from './list-item-renderer/list-item-renderer.component';
import { ListItemDirectiveComponent } from './list-item-directive/list-item-directive.component';
import { ListDirectiveComponent } from './list-directive/list-directive.component';
import { ListRendererComponent } from './list-renderer/list-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemRendererComponent,
    ListItemDirectiveComponent,
    ListDirectiveComponent,
    ListRendererComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
