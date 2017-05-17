import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css']
})
export class TrafficLightComponent implements OnInit {
  public red = true;
  public yellow = false;
  public green = false;
  public state: string;

  constructor() {
  }

  ngOnInit() {
    this.state = 'red';
  }

  next() {
    switch (this.state) {
      case 'red':
        this.red = false;
        this.green = true;
        this.state = "green";
        break;
      case "green":
        this.yellow = true;
        this.green = false;
        this.state = "yellow";
        break;
      case "yellow":
        this.yellow = false;
        this.red = true;
        this.state = "red"
    }
  }

}
