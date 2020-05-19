import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { AboutMeComponent } from './about-me.component';
import { CareerComponent } from './career/career.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { MiniProfileCardComponent } from './mini-profile-card/mini-profile-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AboutMeComponent,
    CareerComponent,
    EducationComponent,
    MiniProfileCardComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatListModule,
    MatTabsModule
  ],
  exports: [
    AboutMeComponent,
    MiniProfileCardComponent
  ]
})
export class AboutMeModule { }
