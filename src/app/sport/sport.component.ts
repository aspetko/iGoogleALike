import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: 'asic-sport',
  templateUrl: 'sport.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class SportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
