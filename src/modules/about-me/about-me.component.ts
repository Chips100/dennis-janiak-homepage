import { Component } from "@angular/core";
import { ResourcesService } from "../shared/resources/resources-service/resources.service";
import { ResourcesHandle } from "../shared/resources/resources-service/resources.handle";
import { AboutMeResources } from "./about-me.resources";

@Component({
    selector: 'dj-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
    public constructor(resourcesService: ResourcesService) {
        this.resources = resourcesService.getResources(AboutMeResources);
    }
    
    public resources: ResourcesHandle<AboutMeResources>;
 }