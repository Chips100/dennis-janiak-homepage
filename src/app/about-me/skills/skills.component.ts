import { Component } from "@angular/core";
import { Skills } from './skills';

@Component({
    selector: 'dj-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
    public readonly skills = Skills;
}