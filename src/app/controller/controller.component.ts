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
  public pulseTime;
  public yellowShiftTime;
  public changeDelay;
  private TimerControl;
  private controlState;

  constructor() {

  }

  ngOnInit() {
    this.pulseTime = 5;
    this.updateYellowShiftTimes(30000); // 30 seconds
    this.changeDelay = this.yellowShiftTime + 500; // Transition time
    this.TimerControl = false;
  }

  updateYellowShiftTimes(time: number) {
    this.yellowShiftTime = time;
    this.north.yellowShitTimeSetter(this.yellowShiftTime);
    this.south.yellowShitTimeSetter(this.yellowShiftTime);
    this.east.yellowShitTimeSetter(this.yellowShiftTime);
    this.west.yellowShitTimeSetter(this.yellowShiftTime);
  }

  cyclePulseCalc() {
    let driving_interval = (this.pulseTime * 60) * 1000;
    return driving_interval + this.changeDelay
  }

  start() {
    let cycle_delay = this.cyclePulseCalc();
    console.log(cycle_delay);
    this.controlState = "inital";

    if (this.controlState == "inital") {
      this.north.turn_green();
      this.south.turn_green();
    }
    this.TimerControl = window.setInterval(() => {
      switch (this.controlState) {
        case "WE":
          this.north.turn_red();
          this.south.turn_red();
          window.setTimeout(() => {
            this.east.turn_green();
            this.west.turn_green();
          }, this.changeDelay);

          this.controlState = "NS";
          break;

        case "NS":
          this.east.turn_red();
          this.west.turn_red();
          window.setTimeout(() => {
            this.north.turn_green();
            this.south.turn_green();
          }, this.changeDelay);
          this.controlState = "WE";
          break;
        default :
          this.controlState = "WE";

      }
    }, cycle_delay)
  }


  reset() {
    clearInterval(this.TimerControl);
    this.north.set_red();
    this.south.set_red();
    this.east.set_red();
    this.west.set_red();

  }
}
