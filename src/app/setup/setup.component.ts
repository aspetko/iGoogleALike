import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: 'asic-setup',
  templateUrl: 'setup.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class SetupComponent implements OnInit {
  public pages: string[] = ['productivity', 'business', 'database', 'ernaehrung', 'esoterik', 'health', 'hobby', 'java',
        'kochen', 'latex', 'leisure', 'motivation', 'news', 'nix', 'organisation', 'photographie', 'private', 'project',
        'quotes', 'radio', 'reise', 'science', 'security', 'social', 'sozialMedia', 'sport', 'sprachen', 'start','studium',
        'tips','tv'
  ];
  constructor() { }

  ngOnInit() {
  }

}
