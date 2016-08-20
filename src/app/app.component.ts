import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";
import { GoogleSearchComponent } from "./google-search/google-search.component";
import { StartpageSearchComponent } from "./startpage-search/startpage-search.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, GoogleSearchComponent, StartpageSearchComponent]
})
export class AppComponent {
}
