import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
 
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsDashBoardComponent } from './patients-dash-board/patients-dash-board.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsDashBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
