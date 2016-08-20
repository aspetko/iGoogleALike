import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: 'asic-project',
  templateUrl: 'project.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
