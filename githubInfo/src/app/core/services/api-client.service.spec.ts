import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiClientService } from './api-client.service';

describe('ApiClientService', () => {
  let service: ApiClientService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let expectedPulls: any[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ApiClientService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    expectedPulls = [
      { id: 1, name: 'A' },
      { id: 2, name: 'B' },
     ]
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should return expected data when called getPulls once', () => {
    // Act
    service.getPulls('/pulls').subscribe(
      data => expect(data).toEqual(expectedPulls, 'should return expected data'),
      fail
    );
    // service should have made one request to GET data from expected URL
    const req = httpTestingController.expectOne('/pulls');

    // Assert
    expect(req.request.method).toEqual('GET');
    // Respond with the mock data
    req.flush(expectedPulls);
  });
});
