import { Component } from "@angular/core";
import { Skills } from '../skills/skills';

@Component({
    selector: 'dj-career',
    templateUrl: './career.component.html',
    styleUrls: ['./career.component.css']
})
export class CareerComponent {
    public skills = Skills;
}