import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: 'asic-motivation',
  templateUrl: 'motivation.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class MotivationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
