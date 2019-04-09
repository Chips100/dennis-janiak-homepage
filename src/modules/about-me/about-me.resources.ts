import { Resources } from "../shared/resources/resources";

/**
 * Typings for resources in the About Me section.
 */
export class AboutMeResources implements Resources {
    public readonly identifier: string = "about-me";

    public readonly aboutMe: string;
    public readonly career: string;
    public readonly education: string;
    public readonly skills: string;

    public readonly careerItems: Array<{
        title: string,
        subtitle: string,
        keywords: string[],
        content: string[]
    }>;

    public readonly educationItems: Array<{
        title: string,
        subtitle: string,
        content: string[],
        checklists: Array<{
            title: string,
            items: Array<{ label: string, score: string }>
        }>
    }>;

    public readonly skillsItems: Array<{
        level: string,
        text: string,
        keywords: string
    }>;

    public readonly notableReadingsTitle: string;
    public readonly notableReadings: string[];
}