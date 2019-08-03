import { Component } from "@angular/core";
import { ResourcesService } from "../../shared/resources/resources-service/resources.service";
import { ResourcesHandle } from "../../shared/resources/resources-service/resources.handle";
import { AppResources } from "../app.resources";

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    public constructor(resourcesService: ResourcesService) {
        this.resources = resourcesService.getResources(AppResources);
    }
    
    public resources: ResourcesHandle<AppResources>;
}