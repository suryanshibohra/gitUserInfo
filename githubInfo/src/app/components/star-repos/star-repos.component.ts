import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

import { interval } from 'rxjs';

import { DEFAULT_USER_FOR_OPEN_PR, RepoData } from 'src/app/app.component.models';
import { ApiClientService } from 'src/app/core/services/api-client.service';
import { CommonUtils } from 'src/app/shared/utils/common-utils';

@Component({
  selector: 'app-star-repos',
  templateUrl: './star-repos.component.html',
  styleUrls: ['./star-repos.component.scss']
})
export class StarReposComponent implements OnInit, OnDestroy {
  repoData: RepoData[] = [];
  pullData: any[] = [];
  isToShowPRs = true;
  sourceInterval: any;

  @Output() prData: any = new EventEmitter();
  constructor(private apiClient: ApiClientService) { }

  ngOnInit(): void {
    this.setUpGetStarredReposByUserSub();
    this.setUpInterval();
  }

  setUpGetStarredReposByUserSub(): void {
    // by default username has been set to `fabpot`, pass username as arguments to getReposForUser to get data for another user.
    this.apiClient.getReposStarredByUser().subscribe((data) => {
      // ToDo: error handling when service fails
      this.repoData = CommonUtils.getRepoData(data);
      this.getPullUrlsFromRepoData();
    });
  }

  private getPullUrlsFromRepoData(): void {
    let itemsProcessed = 0;
    this.repoData.forEach((repo) => {
      const pullUrl = repo.pulls_url.split('{/number}')[0];
      this.apiClient.getPulls(pullUrl).subscribe((data: any) => {
        // ToDo: error handling when service fails
        this.pullData.push(...data);
        // here adding a new property to store pulls data in main repo object.
        repo['pullsData'] = data;
        // at last iteration emit pull data.
        // ToDo: use Promises or better approach here
        itemsProcessed++;
        if (itemsProcessed === this.repoData.length) {
          this.getUsersPrAndEmitData();
        }
      });
    });
  }

  getUsersPrAndEmitData(user_name = DEFAULT_USER_FOR_OPEN_PR): void {
    // DEFAULT_USER does not have any open PR so for demo purpose using a user from data.
    const dataToEmit = this.pullData.filter((data) => data.user.login === user_name);
    this.prData.emit(dataToEmit);
  }

  private setUpInterval(): void {
    // here adding interval so that data will get refreshed in every 30 secs
    // emit value in sequence every 30 second
    this.sourceInterval = interval(30000);
    this.sourceInterval.subscribe(() => {
      // reset pullData so that it does not append duplicate values in each interval
      this.pullData = [];
      this.setUpGetStarredReposByUserSub();
    });
  }

  ngOnDestroy(): void {
    this.sourceInterval.unsubscribe();
  }

}
