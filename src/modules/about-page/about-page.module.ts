import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AboutPageComponent } from './about-page.component';
import { HostingComponent } from './hosting/hosting.component';
import { DevelopmentComponent } from './development/development.component';

@NgModule({
  declarations: [
      AboutPageComponent,
      DevelopmentComponent,
      HostingComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    RouterModule.forChild([
      { path: '', component: AboutPageComponent }
    ]),
    SharedModule
  ]
})
export class AboutPageModule { }
