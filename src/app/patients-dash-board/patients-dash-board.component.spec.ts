import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsDashBoardComponent } from './patients-dash-board.component';

describe('PatientsDashBoardComponent', () => {
  let component: PatientsDashBoardComponent;
  let fixture: ComponentFixture<PatientsDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsDashBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
