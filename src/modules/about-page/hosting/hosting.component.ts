import { Component } from "@angular/core";
import { AboutPageResources } from "../about-page.resources";
import { ResourcesService } from "../../shared/resources/resources-service/resources.service";
import { ResourcesHandle } from "../../shared/resources/resources-service/resources.handle";

/**
 * Displays information about the hosting scenario of the page.
 */
@Component({
    selector: 'dj-hosting',
    templateUrl: './hosting.component.html',
    styleUrls: ['./hosting.component.css']
})
export class HostingComponent {
    public constructor(resourcesService: ResourcesService) {
        this.resources = resourcesService.getResources(AboutPageResources);
      }
      
    public resources: ResourcesHandle<AboutPageResources>;
}