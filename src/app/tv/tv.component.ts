import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: 'asic-tv',
  templateUrl: 'tv.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class TvComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
