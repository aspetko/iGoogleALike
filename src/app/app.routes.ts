import { provideRouter } from "@angular/router";
import { BusinessComponent } from "./business";
import { ProductivityComponent } from "./productivity/";
import { DatabaseComponent } from "./database";
import { ErnaehrungComponent } from "./ernaehrung";
import { EsoterikComponent } from "./esoterik";
import { HealthComponent } from "./health";
import { HobbyComponent } from "./hobby";
import { JavaComponent } from "./java";
import { KochenComponent } from "./kochen";
import { LatexComponent } from "./latex";
import { LeisureComponent } from "./leisure";
import { MotivationComponent } from "./motivation";
import { NewsComponent } from "./news";
import { NixComponent } from "./nix";
import { OrganisationComponent } from "./organisation";
import { PhotographieComponent } from "./photographie";
import { PrivateComponent } from "./private";
import { ProjectComponent } from "./project";
import { QuotesComponent } from "./quotes";
import { RadioComponent } from "./radio";
import { ReiseComponent } from "./reise";
import { ScienceComponent } from "./science";
import { SecurityComponent } from "./security";
import { SocialComponent } from "./social";
import { SozialMediaComponent } from "./sozial-media";
import { SportComponent } from "./sport";
import { SprachenComponent } from "./sprachen";
import { StartComponent } from "./start";
import { StudiumComponent } from "./studium";
import { TipsComponent } from "./tips";
import { TvComponent } from "./tv";
import { SetupComponent } from "./setup/setup.component";

export const APP_ROUTES_PROVIDERS = [
  provideRouter([
    { path: '', redirectTo: '/start', pathMatch: 'full' },
    { path: 'productivity', component: ProductivityComponent },
    { path: 'business', component:BusinessComponent },
    { path: 'database', component:DatabaseComponent },
    { path: 'ernaehrung', component:ErnaehrungComponent },
    { path: 'esoterik', component:EsoterikComponent },
    { path: 'health', component:HealthComponent },
    { path: 'hobby', component:HobbyComponent },
    { path: 'java', component:JavaComponent },
    { path: 'kochen', component:KochenComponent},
    { path: 'latex', component:LatexComponent },
    { path: 'leisure', component:LeisureComponent },
    { path: 'motivation', component:MotivationComponent },
    { path: 'news', component:NewsComponent },
    { path: 'nix', component:NixComponent },
    { path: 'organisation', component:OrganisationComponent },
    { path: 'photographie', component:PhotographieComponent },
    { path: 'private', component:PrivateComponent},
    { path: 'project', component:ProjectComponent},
    { path: 'quotes', component:QuotesComponent },
    { path: 'radio', component:RadioComponent },
    { path: 'reise', component:ReiseComponent },
    { path: 'science', component:ScienceComponent },
    { path: 'security', component:SecurityComponent},
    { path: 'social', component:SocialComponent },
    { path: 'sozialMedia', component:SozialMediaComponent },
    { path: 'sport', component:SportComponent },
    { path: 'sprachen', component:SprachenComponent },
    { path: 'start', component:StartComponent },
    { path: 'studium', component:StudiumComponent },
    { path: 'tips', component:TipsComponent },
    { path: 'tv', component:TvComponent },
    { path: 'setup', component:SetupComponent },
  ])
];
