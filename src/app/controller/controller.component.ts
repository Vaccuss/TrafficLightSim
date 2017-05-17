import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {

  @ViewChild('north') north;
  @ViewChild('south') south;
  @ViewChild('east') east;
  @ViewChild('west') west;
  private controlState;
  private northSouthLights;
  private eastWestLights;

  constructor() {

  }

  ngOnInit() {
    this.northSouthLights = [this.north, this.south];
    this.eastWestLights = [this.east, this.west];
  }


  turnYellow() {
    if (this.controlState == "NS") {
      this.lightChange(this.northSouthLights);
    }
    else {
      this.lightChange(this.eastWestLights);
    }
    setTimeout(this.control.bind(this), 3000)
  }

  control() {
    this.lightChange(this.northSouthLights);
    this.lightChange(this.eastWestLights);
    this.controlState = (this.controlState == "NS") ? "EW" : "NS";
    setTimeout(this.turnYellow.bind(this), 5000)
  }

  lightChange(lightArray) {
    for (let light of lightArray) {
      light.next();
    }
  }

  start() {
    this.controlState = "NS";
    this.lightChange(this.northSouthLights);
    setTimeout(this.turnYellow.bind(this), 5000)
  }

}
