import { Component, Inject } from "@angular/core";
import { ResourcesService } from "../resources-service/resources.service";
import { Language } from "../language";
import { RESOURCES_LANGUAGES } from "../languagesInjectionToken";

/**
 * Component that allows changing the language of resources.
 */
@Component({
    selector: 'dj-language-selector',
    templateUrl: './language-selector.component.html',
    styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent {
    /**
     * The currently selected language.
     */
    public selectedLanguage: Language;

    /**
     * Constructor.
     * @param resourcesService ResourcesService that allows changing the current language of resources. 
     * @param languages Languages that have been configured to be available in the app.
     */
    public constructor(private readonly resourcesService: ResourcesService, @Inject(RESOURCES_LANGUAGES) public readonly languages: Language[]) {
        this.selectedLanguage = languages.find(x => x.key === resourcesService.getLanguage());
    }

    /**
     * Selects the specified language.
     * @param language Language that should be selected.
     */
    public selectLanguage(language: Language) {
        this.selectedLanguage = language;
        this.resourcesService.setLanguage(language.key);
    }

    /**
     * Determines if the specified language is currently selected.
     * @param language The language to check.
     */
    public isSelected(language: Language) {
        return this.selectedLanguage === language;
    }
}