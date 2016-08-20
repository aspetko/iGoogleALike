import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: 'asic-tips',
  templateUrl: 'tips.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class TipsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
