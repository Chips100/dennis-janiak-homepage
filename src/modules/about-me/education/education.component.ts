import { Component } from "@angular/core";
import { ResourcesService } from "src/modules/shared/resources/resources-service/resources.service";
import { AboutMeResources } from "../about-me.resources";
import { ResourcesHandle } from "src/modules/shared/resources/resources-service/resources.handle";

@Component({
    selector: 'dj-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.css']
})
export class EducationComponent {
    public constructor(resourcesService: ResourcesService) {
        this.resources = resourcesService.getResources(AboutMeResources);
    }

    public resources: ResourcesHandle<AboutMeResources>;
}