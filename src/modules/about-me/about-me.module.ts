import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from '../shared/shared.module';
import { AboutMeComponent } from './about-me.component';
import { CareerComponent } from './career/career.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [
    AboutMeComponent,
    CareerComponent,
    EducationComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatListModule,
    MatTabsModule,
    SharedModule
  ],
  exports: [
    AboutMeComponent
  ]
})
export class AboutMeModule { }
