import { Component, Input } from '@angular/core';
import { RepoData } from 'src/app/app.component.models';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.scss']
})
export class UserReposComponent {
  @Input()
  repoData: Array<RepoData> = [];
  @Input()
  isToShowDetails = true;
  constructor() { }
}
