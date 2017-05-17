import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-north-light',
  templateUrl: './north-light.component.html',
  styleUrls: ['./north-light.component.css']
})
export class NorthLightComponent implements OnInit {
  control = {'red': false, 'yellow': false, 'green':true};

  constructor() {
  }

  ngOnInit() {
  }

  turn_red(){
    this.control.green = false;
    this.control.yellow = true;
    setTimeout(3000);
    this.control.yellow = false;
    this.control.red = true
  }

  turn_green() {
    this.control.red = false;
    this.control.green = true;
  }

}
