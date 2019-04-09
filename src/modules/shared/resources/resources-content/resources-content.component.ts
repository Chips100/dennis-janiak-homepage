import { Component, Input, ContentChild, TemplateRef } from "@angular/core";
import { ResourcesHandle } from "../resources-service/resources.handle";

/**
 * Component that wraps content that depends on Resources.
 * Displays a loading indicator as long as the resources have not been loaded.
 */
@Component({
    selector: 'dj-resources-content',
    styleUrls: ['./resources-content.component.css'],
    templateUrl: './resources-content.component.html'
})
export class ResourcesContentComponent {
    /**
     * Handle to resources that are used in the content.
     */
    @Input()
    public resourcesHandle: ResourcesHandle<any>;

    /**
     * Can be specified to simply show nothing until the resources have been loaded.
     * By default, a loading spinner will be shown.
     */
    @Input()
    public noLoadingSpinner: boolean;

    @ContentChild(TemplateRef)
    public contentRef; 
}