import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: 'asic-latex',
  templateUrl: 'latex.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class LatexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
