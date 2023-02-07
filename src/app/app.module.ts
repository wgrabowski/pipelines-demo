import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LogicModule } from '@pipelines-demo/logic';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, LogicModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
