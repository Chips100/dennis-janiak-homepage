import { Component } from '@angular/core';
import { ResourcesService } from 'src/modules/shared/resources/resources-service/resources.service';
import { AppResources } from '../app.resources';
import { ResourcesHandle } from 'src/modules/shared/resources/resources-service/resources.handle';

/**
 * Component that displays the most important information in a mini card.
 */
@Component({
  selector: 'dj-mini-profile-card',
  templateUrl: './mini-profile-card.component.html',
  styleUrls: ['./mini-profile-card.component.css']
})
export class MiniProfileCardComponent { 
  public constructor(resourcesService: ResourcesService) {
    this.resources = resourcesService.getResources(AppResources);
  }

  public resources: ResourcesHandle<AppResources>;
}