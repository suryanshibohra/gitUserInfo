import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InfoBoxComponent } from './info-box.component';

describe('InfoBoxComponent', () => {
  let component: InfoBoxComponent;
  let fixture: ComponentFixture<InfoBoxComponent>;

  beforeEach(waitForAsync (() => {
     TestBed.configureTestingModule({
      declarations: [ InfoBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set repoData as empty by default', () => {
    expect(component.repoData).toEqual([]);
  });

  it('should set isToShowPRs as false by default', () => {
    expect(component.isToShowPRs).toBeFalsy();
  });

  it('should set isToShowDetails as true by default', () => {
    expect(component.isToShowDetails).toBeTruthy();
  });
});
