import { Component, Input, OnInit } from '@angular/core';
import { NO_OPEN_PR_MSG } from 'src/app/app.component.models';

@Component({
  selector: 'app-pr-list',
  templateUrl: './pr-list.component.html',
  styleUrls: ['./pr-list.component.scss']
})
export class PrListComponent implements OnInit {
  @Input() pullsData :any[] | undefined= [];
  noOpenPrMsg = NO_OPEN_PR_MSG;
  constructor() { }

  ngOnInit(): void {
  }

}
