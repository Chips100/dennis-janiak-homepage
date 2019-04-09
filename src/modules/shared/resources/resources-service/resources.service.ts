import { Injectable, Inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Resources } from "../resources";
import { ResourcesHandle } from "./resources.handle";
import { RESOURCES_LANGUAGES } from "../languagesInjectionToken";
import { Language } from "../language";

/**
 * Service that provides resources from json files.
 * JSON files are expected to be available as assets in subfolder /resources/{identifier}/{languageKey}.json.
 */
@Injectable()
export class ResourcesService {
    /**
     * Store with the previously created ResourceHandles.
     */
    private readonly resourcesHandles: { [identifier: string]: ResourcesHandle<any> } = {};

    /**
     * Holds previously loaded resources from json files; two level key structure: language / identifier.
     */
    private readonly cachedResources: {[language: string]: {[identifier: string]: any}} = {};

    private currentLanguage: string;

    /**
     * Constructor.
     * @param httpClient HttpClient used to load the JSON files. 
     * @param resourcesLanguages Available languages for the resources.
     */
    public constructor(private httpClient: HttpClient, @Inject(RESOURCES_LANGUAGES) private resourcesLanguages: Language[]) {
        this.currentLanguage = this.getDefaultLanguage(this.getUserLanguagePreferences());
    }

    /**
     * Gets the currently active language key.
     * @returns The currently active language key.
     */
    public getLanguage(): string { return this.currentLanguage; }

    /**
     * Gets a handle to the resources with the specified typings.
     * @param klass Class that represents the resources.
     * @returns A handle to access the resources.
     */
    public getResources<TResources extends Resources>(klass: { new(): TResources }): ResourcesHandle<TResources> {
        // Create throw-away instance just to extract the identifier of the requested resources.
        const identifier = new klass().identifier;
        
        return this.getOrCreateResourcesHandle(identifier, () => {
            const handle = new ResourcesHandle<TResources>();
            this.loadValuesForResourcesHandle(handle, identifier, this.currentLanguage);
            return handle;
        });
    }

    /**
     * Changes the currently active language; all existing resource handles will be updated.
     * @param language Key of the language that should be activated.
     */
    public setLanguage(language: string) {
        if (!this.resourcesLanguages.some(x => x.key === language)) {
            throw new Error(`Language ${language} is not available.`);
        }

        this.currentLanguage = language;
        for (const identifier in this.resourcesHandles) {
            this.loadValuesForResourcesHandle(this.resourcesHandles[identifier], identifier, language);
        }
    }

    /**
     * Gets the default language selection that respects the user preferences.
     * @param userPreferences Language preferences for the user, ordered by priority.
     */
    public getDefaultLanguage(userPreferences: ReadonlyArray<string>): string {
        return userPreferences
            // Map preference to supported language entry.
            .map(key => this.resourcesLanguages.find(l => (key || '').startsWith(l.key)))
            // Filter unsupported entries.
            .filter(x => !!x)
            // Fall back to first supported language entry.
            .concat(this.resourcesLanguages[0])[0].key;
    }

    private getUserLanguagePreferences(): ReadonlyArray<string> {
        if (!window || !window.navigator) return [];
        return window.navigator.languages || [window.navigator.language];
    }

    private loadValuesForResourcesHandle(handle: ResourcesHandle<any>, identifier: string, language: string) {
        if (this.tryUseCachedResources(handle, identifier, language)) { return; }

        handle.isLoading = true;
        this.httpClient.get(`assets/resources/${identifier}/${language}.json`).subscribe(x => {
            this.cacheResources(identifier, language, x);

            // Exit if request has been overtaken by a language change.
            if (this.currentLanguage !== language) { return; }

            handle.values = x;
            handle.isLoading = false;
        });
    }

    private tryUseCachedResources(handle: ResourcesHandle<any>, identifier: string, language: string): boolean {
        const resources = this.cachedResources[language] && this.cachedResources[language][identifier];
        if (!resources) { return false; }

        handle.values = resources;
        return true;
    };

    private cacheResources(identifier: string, language: string, resources: any) {
        this.cachedResources[language] = this.cachedResources[language] || {};
        this.cachedResources[language][identifier] = resources;
    }

    private getOrCreateResourcesHandle(identifier: string, factory: () => ResourcesHandle<any>): ResourcesHandle<any> {
        return this.resourcesHandles[identifier] || (this.resourcesHandles[identifier] = factory());
    }
}