import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: 'asic-hobby',
  templateUrl: 'hobby.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class HobbyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
