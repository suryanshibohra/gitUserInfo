import { Component } from '@angular/core';

import { LOADING_MSG } from 'src/app/app.component.models';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  loadingMsg = LOADING_MSG;
  constructor() { }

}
