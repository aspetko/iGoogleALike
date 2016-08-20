import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: 'asic-health',
  templateUrl: 'health.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class HealthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
