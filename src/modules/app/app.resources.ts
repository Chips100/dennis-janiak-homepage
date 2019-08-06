import { Resources } from "../shared/resources/resources";

/**
 * Typings for resources in the app module (the appliaction "shell").
 */
export class AppResources implements Resources {
    public readonly identifier: string = "app";

    public readonly profile: {
        readonly name: string;
        readonly title: string;
        readonly location: string;
        readonly keywords: string[];
    };

    public readonly thirdPartyLinks: Array<{
        readonly iconImage: string;
        readonly name: string;
        readonly url: string;
    }>;
    
    public readonly emailAddress: string;
}