import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css']
})
export class TrafficLightComponent implements OnInit {
  public red = false;
  public yellow = false;
  public green = true;
  private yellowShowTime;

  constructor() {
  }

  ngOnInit() {
    this.set_red();
    this.yellowShowTime = 30000 // 30 seconds default
  }

  public set_red() {
    this.red = true;
    this.green = false;
  }

  public set_green() {
    this.red = false;
    this.green = true;
  }

  public turn_red() {
    this.green = false;
    this.yellow = true;
    window.setTimeout(() => {
      this.yellow = false;
      this.red = true;
    }, this.yellowShowTime)
  }

  public turn_green() {
    // Wrapper for component internal consistency and logical extension point.
    this.set_green()
  }

  yellowShitTimeSetter(time: number) {
    this.yellowShowTime = time;
  }

  yellowShitTimeGetter() {
    return this.yellowShowTime
  }

}
