import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ActionPromptComponent } from './action-prompt/action-prompt.component';
import { CaseDetailsComponent } from './case-details/case-details.component';
import { SpecialHandlingComponent } from './special-handling/special-handling.component';
import { FooterComponent } from './footer/footer.component';
import { TpAttorneyComponent } from './tp-attorney/tp-attorney.component';
import { EimAttorneyComponent } from './eim-attorney/eim-attorney.component';
import { QueuedActionsComponent } from './queued-actions/queued-actions.component';
import { SummaryTrackerComponent } from './summary-tracker/summary-tracker.component';
import { TpInsuranceComponent } from './tp-insurance/tp-insurance.component';
import { EimInsuranceComponent } from './eim-insurance/eim-insurance.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActionPromptComponent,
    CaseDetailsComponent,
    SpecialHandlingComponent,
    FooterComponent,
    TpAttorneyComponent,
    EimAttorneyComponent,
    QueuedActionsComponent,
    SummaryTrackerComponent,
    TpInsuranceComponent,
    EimInsuranceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
