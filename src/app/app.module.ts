import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ActionPromptComponent } from './action-prompt/action-prompt.component';
import { CaseDetailsComponent } from './case-details/case-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActionPromptComponent,
    CaseDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
