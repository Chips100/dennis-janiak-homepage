import { Resources } from "../shared/resources/resources";

/**
 * Typings for resources in the app module (the appliaction "shell").
 */
export class AppResources implements Resources {
    public readonly identifier: string = "app";

    public readonly introduction: {
        title: string,
        body: string[],
        aboutMe: string,
        contactMe: string
    };

    public readonly navbar: {
        label: string,
        links: Array<{ label: string, link: string }>
    }
}