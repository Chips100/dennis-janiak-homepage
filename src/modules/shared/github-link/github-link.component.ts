import { Component, Input } from "@angular/core";

/**
 * Hyperlink to a repository hosted on Github.
 */
@Component({
  selector: 'dj-github-link',
  templateUrl: './github-link.component.html'
})
export class GithubLinkComponent {
  /**
   * URL to the repository on Github.
   */
  @Input()
  public repositoryUrl: string;
}