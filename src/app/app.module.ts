import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {TrafficLightComponent} from "./traffic-light/traffic-light.component";
import {ControllerComponent} from "./controller/controller.component";

@NgModule({
  declarations: [
    TrafficLightComponent,
    ControllerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [ControllerComponent]
})

export class AppModule {
}
