import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { RepoData, TabHeadings, APP_TITLE } from './app.component.models';
import { ApiClientService } from './core/services/api-client.service';
import { CommonUtils } from './shared/utils/common-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = APP_TITLE;
  repoData!: Array<RepoData>;
  openPrOfUser: any;
  tabHeadings = TabHeadings;
  isToShowDetails: boolean | any;
  checkBoxForm: FormGroup | any;

  constructor(public apiClient: ApiClientService, public fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.getItemFromLocalStorage();
    this.initForm();
    this.setUpGetReposForUserSub();
  }

  private setUpGetReposForUserSub(): void {
    // by default username has been set to `fabpot`, pass username as arguments to getReposForUser to get data for another user.
    this.apiClient.getReposForUser().subscribe((data) => {
      // ToDo: error handling when service fails
      this.repoData = CommonUtils.getRepoData(data);
    });
  }

  prDataHandler(prData: any): void {
    if (prData) {
      this.openPrOfUser = prData;
    }
  }

  // Below code is for switch- this code saves user preference of showing details in local storage.
  private initForm(): void {
    const FormControlObject: any = {};
    FormControlObject['switch'] = new FormControl(this.isToShowDetails);
    this.checkBoxForm = this.fb.group(FormControlObject);
  }

  private getItemFromLocalStorage(): void {
    const val: any = localStorage.getItem('isToShowDetails');
    this.isToShowDetails = JSON.parse(val);
  }

  onSwitchHandler(event: MouseEvent | any): void {
    this.isToShowDetails = event.target.checked;
    localStorage.setItem('isToShowDetails', JSON.stringify(this.isToShowDetails));
  }

}
