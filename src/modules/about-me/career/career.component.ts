import { ResourcesService } from "../../shared/resources/resources-service/resources.service";
import { AboutMeResources } from "../about-me.resources";
import { ResourcesHandle } from "../../shared/resources/resources-service/resources.handle";
import { Component } from "@angular/core";

@Component({
    selector: 'dj-career',
    templateUrl: './career.component.html',
    styleUrls: ['./career.component.css']
})
export class CareerComponent {
    public constructor(resourcesService: ResourcesService) {
      this.resources = resourcesService.getResources(AboutMeResources);
    }
    
    public resources: ResourcesHandle<AboutMeResources>;
}