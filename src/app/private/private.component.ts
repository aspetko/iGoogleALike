import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: 'asic-private',
  templateUrl: 'private.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class PrivateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
