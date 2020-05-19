import { Component } from "@angular/core";

/**
 * Main navigation bar for the app.
 */
@Component({
    selector: 'dj-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    public languages: LanguageItem[] = [
        { name: 'de', displayName: 'Deutsch' },
        { name: 'en', displayName: 'English' }
    ];

    public isLanguageSelected(language: LanguageItem) {
        return location.href.indexOf(`/${language.name}/`) >= 0;
    }
}

interface LanguageItem {
    name: string;
    displayName: string;
}