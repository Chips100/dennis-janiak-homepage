import { TestBed, async } from '@angular/core/testing';
import { ResourcesService } from './resources.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { Language } from '../language';
import { RESOURCES_LANGUAGES } from '../languagesInjectionToken';
import { Resources } from '../resources';

describe('ResourcesService', () => {
  const languages:Language[] = [
    { key: 'en', displayName: 'English' },
    { key: 'de', displayName: 'Deutsch '}
  ];

  let service: ResourcesService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ResourcesService,
        { provide: RESOURCES_LANGUAGES, useValue: languages }
      ]
    }).compileComponents();

    service = TestBed.get(ResourcesService);
    httpMock = TestBed.get(HttpTestingController);
  }));
  
  it('should use the first available language as the default.', () => {
    expect(service.getLanguage()).toEqual('en');
  });

  it('should return a loading handle as long as the HTTP request has not returned.', () => {
    expect(service.getResources(TestResources).isLoading).toBeTruthy();
  });

  it('should reuse previously created handles.', () => {
    expect(service.getResources(TestResources)).toBe(service.getResources(TestResources));
  });

  it('should load the json file for the specified identifier when requested', () => {
    const handle = service.getResources(TestResources);
    httpMock.expectOne('assets/resources/TestResources/en.json').flush({
        someValue: "Hello, World!"
    });

    expect(handle.isLoading).toBeFalsy();
    expect(handle.values.someValue).toEqual("Hello, World!");
  });

  it('should load other resources when the languages is changed.', () => {
    const handle = service.getResources(TestResources);
    httpMock.expectOne('assets/resources/TestResources/en.json').flush({
        someValue: "Hello, World!"
    });

    service.setLanguage('de');
    expect(handle.isLoading).toBeTruthy();
    httpMock.expectOne('assets/resources/TestResources/de.json').flush({
        someValue: "Hallo, Welt!"
    });
    
    expect(handle.isLoading).toBeFalsy();
    expect(handle.values.someValue).toEqual("Hallo, Welt!");
  });

  it('should cache resources for previously used languages.', () => {
    const handle = service.getResources(TestResources);
    httpMock.expectOne('assets/resources/TestResources/en.json').flush({
        someValue: "Hello, World!"
    });

    service.setLanguage('de');
    httpMock.expectOne('assets/resources/TestResources/de.json').flush({
        someValue: "Hallo, Welt!"
    });

    service.setLanguage('en');
    httpMock.expectNone('assets/resources/TestResources/en.json');
    
    expect(handle.isLoading).toBeFalsy();
    expect(handle.values.someValue).toEqual("Hello, World!");
  });

  it('should choose the available language that best fits the user preferences.', () => {
    expect(service.getDefaultLanguage(['de-DE', 'en-US'])).toEqual('de');
    expect(service.getDefaultLanguage(['en-US', 'de-DE'])).toEqual('en');
    expect(service.getDefaultLanguage(['de-DE', 'en', 'de'])).toEqual('de');
    expect(service.getDefaultLanguage(['it', 'es'])).toEqual('en'); // Fallback.
  });
});

class TestResources implements Resources {
    public readonly identifier = "TestResources";

    public someValue: string;
}