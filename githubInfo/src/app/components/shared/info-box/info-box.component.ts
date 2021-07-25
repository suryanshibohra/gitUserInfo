import { Component, Input, OnInit } from '@angular/core';

import { RepoData } from 'src/app/app.component.models';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit {
  @Input()
  repoData: Array<RepoData> = [];
  @Input() isToShowPRs = false;
  @Input() isToShowDetails = true;
  constructor() { }

  ngOnInit(): void {
  }

}
