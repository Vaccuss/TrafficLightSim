import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './initial-component/app.component';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';
import { NorthLightComponent } from './north-light/north-light.component';
import { RoadComponent } from './road/road.component';

@NgModule({
  declarations: [
    AppComponent,
    TrafficLightComponent,
    NorthLightComponent,
    RoadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [RoadComponent]
})

export class AppModule { }
