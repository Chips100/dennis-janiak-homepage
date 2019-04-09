import { TestBed, async } from '@angular/core/testing';
import { Language } from '../language';
import { RESOURCES_LANGUAGES } from '../languagesInjectionToken';
import { ResourcesService } from '../resources-service/resources.service';
import { LanguageSelectorComponent } from './language-selector.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';

describe('LanguageSelectorComponent', () => {
  const languages:Language[] = [
    { key: 'en', displayName: 'English' },
    { key: 'de', displayName: 'Deutsch '}
  ];

  let service: ResourcesServiceMockup;
  let component: LanguageSelectorComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageSelectorComponent],
      imports: [MatMenuModule],
      providers: [
        { provide: ResourcesService, useClass: ResourcesServiceMockup },
        { provide: RESOURCES_LANGUAGES, useValue: languages }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    service = TestBed.get(ResourcesService);
    component = TestBed.createComponent(LanguageSelectorComponent).componentInstance;
  }));
  
  it('should take the current language of the ResourcesService as the first selected language.', () => {
    expect(component.selectedLanguage).toEqual(languages[1]);
  });

  it('should propagate the selected language to the ResourcesService.', () => {
    component.selectLanguage(languages[0]);

    expect(component.selectedLanguage).toBe(languages[0]);
    expect(service.language).toEqual('en');
  });
});

class ResourcesServiceMockup {
    public language: string = 'de';

    getLanguage(): string { return this.language; }
    setLanguage(language: string) { this.language = language; }
}