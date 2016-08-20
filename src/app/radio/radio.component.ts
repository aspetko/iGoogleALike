import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: 'asic-radio',
  templateUrl: 'radio.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class RadioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
