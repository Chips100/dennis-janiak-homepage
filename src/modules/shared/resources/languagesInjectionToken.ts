import { Language } from "./language";
import { InjectionToken } from "@angular/core";

/**
 * InjectionToken for providing the available languages in the application.
 */
export const RESOURCES_LANGUAGES = new InjectionToken<Language[]>("RESOURCES_LANGUAGES"); 