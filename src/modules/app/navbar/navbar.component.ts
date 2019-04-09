import { Component } from "@angular/core";
import { ResourcesService } from "../../shared/resources/resources-service/resources.service";
import { AppResources } from "../app.resources";
import { ResourcesHandle } from "../../shared/resources/resources-service/resources.handle";

/**
 * Main navigation bar for the app.
 */
@Component({
    selector: 'dj-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    public constructor(resourcesService: ResourcesService) {
        this.resources = resourcesService.getResources(AppResources);
    }
    
    public resources: ResourcesHandle<AppResources>;
 }