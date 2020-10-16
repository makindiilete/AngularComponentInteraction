import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './ParentToChildCommunication/parent/parent.component';
import { ChildComponent } from './ParentToChildCommunication/child/child.component';
import { ParentComponent2 } from './ChildToParentCommunication/parent/parent-component2.component';
import { ChildComponent2 } from './ChildToParentCommunication/child/child-component2.component';
import { ParentServiceComponent } from './ServiceCommunication/parent-service/parent-service.component';
import { ChildServiceComponent } from './ServiceCommunication/child-service/child-service.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ParentComponent2,
    ChildComponent2,
    ParentServiceComponent,
    ChildServiceComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
