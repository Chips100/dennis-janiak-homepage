/**
 * Interface for languages.
 */
export interface Language {
    /**
     * Key of the language (e.g. 'en', 'de', ...).
     */
    readonly key: string;
    
    /**
     * Name of the language that should be shown in the UI.
     */
    readonly displayName: string;
}