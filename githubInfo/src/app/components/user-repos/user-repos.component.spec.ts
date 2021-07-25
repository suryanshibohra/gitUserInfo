import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReposComponent } from './user-repos.component';

describe('UserReposComponent', () => {
  let component: UserReposComponent;
  let fixture: ComponentFixture<UserReposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserReposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set repoData as empty by default', () => {
    expect(component.repoData).toEqual([]);
  });

  it('should set isToShowDetails as true by default', () => {
    expect(component.isToShowDetails).toBeTruthy();
  });
});