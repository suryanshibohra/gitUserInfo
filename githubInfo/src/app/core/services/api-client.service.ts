import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  private BASE_URL = 'https://api.github.com/';
  constructor(private readonly httpClient: HttpClient) { }


  public getReposForUser(userName = 'fabpot') : Observable<any>{
    // eg: https://api.github.com/users/USERNAME/repos
    const endPoint = new URL(`users/${userName}/repos`, this.BASE_URL).href;
    return this.httpClient.get<any>(endPoint);
  }

  public getReposStarredByUser(userName = 'fabpot') : Observable<any>{
    // Lists repositories a user has starred.
    // eg: https://api.github.com/users/USERNAME/starred
    // the reason fabpot has been used as username because this user is the most active users as of 07/01/21 -source-https://gist.github.com/paulmillr/2657075
    const endPoint = new URL(`users/${userName}/starred`, this.BASE_URL).href;
    return this.httpClient.get<any>(endPoint);
  }

  public getPulls(url: string) : Observable<any>{
    // /repos/{owner}/{repo}/pulls
    return this.httpClient.get<any>(url);
  }


  
}
