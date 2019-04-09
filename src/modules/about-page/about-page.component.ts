import { Component } from "@angular/core";
import { ResourcesHandle } from "../shared/resources/resources-service/resources.handle";
import { AboutPageResources } from "./about-page.resources";
import { ResourcesService } from "../shared/resources/resources-service/resources.service";

/**
 * Main component in the AboutPageModule.
 */
@Component({
    templateUrl: './about-page.component.html',
    styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent {
    public constructor(resourcesService: ResourcesService) {
        this.resources = resourcesService.getResources(AboutPageResources);
    }
        
    public resources: ResourcesHandle<AboutPageResources>;
}