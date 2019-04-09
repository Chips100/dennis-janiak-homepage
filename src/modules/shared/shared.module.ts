import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LanguageSelectorComponent } from './resources/language-selector/language-selector.component';
import { ResourcesContentComponent } from './resources/resources-content/resources-content.component';
import { GithubLinkComponent } from './github-link/github-link.component';

/**
 * Module with basic features that are shared among all modules.
 */
@NgModule({
  declarations: [
    GithubLinkComponent,
    LanguageSelectorComponent,
    ResourcesContentComponent
  ],
  imports: [
      CommonModule,
      HttpClientModule,
      MatButtonModule,
      MatIconModule,
      MatMenuModule,
      MatProgressSpinnerModule
  ],
  exports: [
    GithubLinkComponent,
    LanguageSelectorComponent,
    ResourcesContentComponent
  ]
})
export class SharedModule { }
