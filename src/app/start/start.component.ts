import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {GoogleSearchComponent} from "../google-search/google-search.component";
import {StartpageSearchComponent} from "../startpage-search/startpage-search.component";

@Component({
  selector: 'asic-start',
  templateUrl: 'start.component.html',
  directives: [ROUTER_DIRECTIVES, GoogleSearchComponent, StartpageSearchComponent]
})
export class StartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
