import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { SharedModule } from '../shared/shared.module';
import { RESOURCES_LANGUAGES } from '../shared/resources/languagesInjectionToken';
import { Language } from '../shared/resources/language';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResourcesService } from '../shared/resources/resources-service/resources.service';
import { NavbarComponent } from './navbar/navbar.component';

const languages: Language[] = [
  { key: "de", displayName: "Deutsch" },
  { key: "en", displayName: "English" }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'aboutme', loadChildren: '../about-me/about-me.module#AboutMeModule' },
      { path: 'aboutpage', loadChildren: '../about-page/about-page.module#AboutPageModule' },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]),
    SharedModule
  ],
  providers: [
    ResourcesService,
    { provide: RESOURCES_LANGUAGES, useValue: languages }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
