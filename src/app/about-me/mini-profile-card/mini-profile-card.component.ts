import { Component } from '@angular/core';
import { Skills } from '../skills/skills';

/**
 * Component that displays the most important information in a mini card.
 */
@Component({
  selector: 'dj-mini-profile-card',
  templateUrl: './mini-profile-card.component.html',
  styleUrls: ['./mini-profile-card.component.css']
})
export class MiniProfileCardComponent {
  public skills = Skills;
}