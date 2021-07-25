import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiClientService } from 'src/app/core/services/api-client.service';
import { MOCK_TEST_DATA } from 'src/app/shared/testing/mock-test-data';
import { TestApiClientService } from 'src/app/shared/testing/test-api-client.service';
import { StarReposComponent } from './star-repos.component';

describe('StarReposComponent', () => {
  let component: StarReposComponent;
  let fixture: ComponentFixture<StarReposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarReposComponent],
      providers: [
        {
          provide: ApiClientService,
          useClass: TestApiClientService
        }
      ],
      imports: [
        HttpClientModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should set 'repoData' when getReposForUser sends data`, () => {
    // Act
    component.setUpGetStarredReposByUserSub();

    // Assert
    expect(component.repoData[0]).toEqual(jasmine.objectContaining(MOCK_TEST_DATA.mockRepoData[0]));
  });

  it(`should set 'pullData' when getPulls sends data`, () => {
    // Act
    component.setUpGetStarredReposByUserSub();

    // Assert
    expect(component.pullData[0]).toEqual(MOCK_TEST_DATA.mockPullsRes[0]);
  });

  it(`should emits empty when no open PRs for the user`, () => {
    // Arrange
    spyOn(component.prData, 'emit');

    // Act
    component.setUpGetStarredReposByUserSub();

    // Assert
    expect(component.prData.emit).toHaveBeenCalledWith([]);
  });

  it(`should emit filtered data when there are open PRs for the user`, () => {
    // Arrange
    spyOn(component.prData, 'emit');
    component.pullData = MOCK_TEST_DATA.mockPullsRes;

    // Act
    component.getUsersPrAndEmitData('rgeraads');

    // Assert
    expect(component.prData.emit).toHaveBeenCalledWith(MOCK_TEST_DATA.mockPullsRes);
  });
});
