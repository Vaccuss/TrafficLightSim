import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css']
})
export class TrafficLightComponent implements OnInit {
  red = false;
  yellow = false;
  green = false;
  public state: string;

  constructor() {
  }

  ngOnInit() {
    this.state = 'red';
    this.red = true;
  }

  next() {
    switch (this.state) {
      case 'red':
        this.state = "green";
        break;
      case "green":
        this.state = "yellow";
        break;
      case "yellow":
        this.state = "red";
        break;
    }
    this.red = (this.state == "red");
    this.yellow = (this.state == "yellow");
    this.green = (this.state == "green");
  }

}
