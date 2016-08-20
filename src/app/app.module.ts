import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductivityComponent } from './productivity/productivity.component';
import { SecurityComponent } from './security/security.component';
import { JavaComponent } from './java/java.component';
import { LatexComponent } from './latex/latex.component';
import { NixComponent } from './nix/nix.component';
import { DatabaseComponent } from './database/database.component';
import { HealthComponent } from './health/health.component';
import { MotivationComponent } from './motivation/motivation.component';
import { NewsComponent } from './news/news.component';
import { StudiumComponent } from './studium/studium.component';
import { SportComponent } from './sport/sport.component';
import { KochenComponent } from './kochen/kochen.component';
import { ReiseComponent } from './reise/reise.component';
import { HobbyComponent } from './hobby/hobby.component';
import { SocialComponent } from './social/social.component';
import { PrivateComponent } from './private/private.component';
import { QuotesComponent } from './quotes/quotes.component';
import { StartComponent } from './start/start.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { EsoterikComponent } from './esoterik/esoterik.component';
import { TipsComponent } from './tips/tips.component';
import { PhotographieComponent } from './photographie/photographie.component';
import { LeisureComponent } from './leisure/leisure.component';
import { SozialMediaComponent } from './sozial-media/sozial-media.component';
import { ScienceComponent } from './science/science.component';
import { TvComponent } from './tv/tv.component';
import { RadioComponent } from './radio/radio.component';
import { SprachenComponent } from './sprachen/sprachen.component';
import { ProjectComponent } from './project/project.component';
import { BusinessComponent } from './business/business.component';
import { ErnaehrungComponent } from './ernaehrung/ernaehrung.component';
import { SetupComponent } from './setup/setup.component';
import {APP_ROUTES_PROVIDERS} from "./app.routes";
import { GoogleSearchComponent } from './google-search/google-search.component';
import { StartpageSearchComponent } from './startpage-search/startpage-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductivityComponent,
    SecurityComponent,
    JavaComponent,
    LatexComponent,
    NixComponent,
    DatabaseComponent,
    HealthComponent,
    MotivationComponent,
    NewsComponent,
    StudiumComponent,
    SportComponent,
    KochenComponent,
    ReiseComponent,
    HobbyComponent,
    SocialComponent,
    PrivateComponent,
    QuotesComponent,
    StartComponent,
    OrganisationComponent,
    EsoterikComponent,
    TipsComponent,
    PhotographieComponent,
    LeisureComponent,
    SozialMediaComponent,
    ScienceComponent,
    TvComponent,
    RadioComponent,
    SprachenComponent,
    ProjectComponent,
    BusinessComponent,
    ErnaehrungComponent,
    SetupComponent,
    GoogleSearchComponent,
    StartpageSearchComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [APP_ROUTES_PROVIDERS],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
