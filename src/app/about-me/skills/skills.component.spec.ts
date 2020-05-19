import { TestBed } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SkillsComponent', () => {
    let component: SkillsComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SkillsComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });

        component = TestBed.createComponent(SkillsComponent).componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        expect(component.skills).toBeTruthy();
    });
});