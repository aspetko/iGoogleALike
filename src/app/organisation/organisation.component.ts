import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: 'asic-organisation',
  templateUrl: 'organisation.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class OrganisationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
