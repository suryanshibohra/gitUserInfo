import { Injectable } from '@angular/core';

import { Observable , of} from 'rxjs';

import { ApiClientService } from 'src/app/core/services/api-client.service';
import { MOCK_TEST_DATA } from './mock-test-data';

@Injectable()
/**
 * FakeApiClientService
 * implements only as much of ApiClientService as is actually consumed by the app
 */
export class TestApiClientService extends ApiClientService {

  constructor() {
    // This is a fake testing service that won't be making HTTP
    // requests so we can pass in `null` as the HTTP client.
    super(null!);
  }

  getReposStarredByUser(): Observable<any> {
    return of(MOCK_TEST_DATA.mockReposForUserRes);
  }

  getPulls(url =''): Observable<any> {
    return of(MOCK_TEST_DATA.mockPullsRes);
  }
  
}