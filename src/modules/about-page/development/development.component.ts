import { Component } from "@angular/core";
import { ResourcesService } from "../../shared/resources/resources-service/resources.service";
import { AboutPageResources } from "../about-page.resources";
import { ResourcesHandle } from "../../shared/resources/resources-service/resources.handle";

/**
 * Displays information about the development scenario of the page.
 */
@Component({
    selector: 'dj-development',
    templateUrl: './development.component.html',
    styleUrls: ['./development.component.css']
})
export class DevelopmentComponent {
    public constructor(resourcesService: ResourcesService) {
        this.resources = resourcesService.getResources(AboutPageResources);
      }
      
    public resources: ResourcesHandle<AboutPageResources>;
}