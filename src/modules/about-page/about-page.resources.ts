import { Resources } from "../shared/resources/resources";

/**
 * Typings for resources in the About Page section.
 */
export class AboutPageResources implements Resources {
    public readonly identifier: string = "about-page";

    public readonly title: string;

    public readonly development: {
        title: string,
        body: string[],
        projects: Array<{
            title: string,
            repositoryUrl: string,
            ciBadgeImageUrl: string,
            ciUrl: string,
            description: string[]
        }>
    }

    public readonly hosting: {
        title: string,
        body: string[],
        topics: Array<{
            title: string,
            body: string[]
        }>
    }
}