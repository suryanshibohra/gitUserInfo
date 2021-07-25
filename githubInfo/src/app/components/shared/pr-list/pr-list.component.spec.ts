import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_OPEN_PR_MSG } from 'src/app/app.component.models';

import { PrListComponent } from './pr-list.component';

describe('PrListComponent', () => {
  let component: PrListComponent;
  let fixture: ComponentFixture<PrListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set noOpenPrMsg as NO_OPEN_PR_MSG', () => {
    expect(component.noOpenPrMsg).toEqual(NO_OPEN_PR_MSG);
  });

  it('should set pullsData as empty by default', () => {
    expect(component.pullsData).toEqual([]);
  });
});
