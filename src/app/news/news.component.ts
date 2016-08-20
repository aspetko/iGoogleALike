import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: 'asic-news',
  templateUrl: 'news.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
