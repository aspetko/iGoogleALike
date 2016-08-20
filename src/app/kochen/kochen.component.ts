import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: 'asic-kochen',
  templateUrl: 'kochen.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class KochenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
