import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: 'asic-quotes',
  templateUrl: 'quotes.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class QuotesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
