import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { of } from 'rxjs';

import { AppComponent } from './app.component';
import { APP_TITLE, TabHeadings } from './app.component.models';
import { ApiClientService } from './core/services/api-client.service';
import { MOCK_TEST_DATA } from './shared/testing/mock-test-data';

describe('AppComponent', () => {
  let mockApiClientService: jasmine.SpyObj<ApiClientService>;
  
  beforeEach(async () => {
    mockApiClientService = jasmine.createSpyObj('ApiClientService', ['getReposForUser']);
    mockApiClientService.getReposForUser.and.returnValue(of(MOCK_TEST_DATA.mockReposForUserRes));

    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: ApiClientService,
        useValue: mockApiClientService
        }
      ],
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    // Arrange
    const fixture = TestBed.createComponent(AppComponent);

    // Act
    const app = fixture.componentInstance;

    // Assert
    expect(app).toBeTruthy();
  });

  it(`should have as title 'githubInfo'`, () => {
    // Arrange
    const fixture = TestBed.createComponent(AppComponent);

    // Act
    const app = fixture.componentInstance;

    // Assert
    expect(app.title).toEqual(APP_TITLE);
  });

  it(`should have as tabHeadings 'TabHeadings'`, () => {
    // Arrange
    const fixture = TestBed.createComponent(AppComponent);

    // Act
    const app = fixture.componentInstance;

    // Assert
    expect(app.tabHeadings).toEqual(TabHeadings);
  });

  it(`should set 'openPrOfUser' when called prDataHandler`, () => {
    // Arrange
    const fixture = TestBed.createComponent(AppComponent);
    const mockRes = [{ html_url: "test_html_url" }];
    const app = fixture.componentInstance;

    // Act
    app.prDataHandler(mockRes);

    // Assert
    expect(app.openPrOfUser).toEqual(mockRes);
  });

  it(`should set 'repoData' when getReposForUser sends data`, () => {
    // Arrange
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // Act
    app.ngOnInit();

    // Assert
    expect(app.repoData).toEqual(MOCK_TEST_DATA.mockRepoData);
  });
});
