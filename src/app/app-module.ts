import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Pantalla } from './pantalla/pantalla';
import { Botones } from './botones/botones';

@NgModule({
  declarations: [
    App,
    Pantalla,
    Botones
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
