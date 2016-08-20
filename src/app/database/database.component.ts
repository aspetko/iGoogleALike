import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: 'asic-database',
  templateUrl: 'database.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class DatabaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
