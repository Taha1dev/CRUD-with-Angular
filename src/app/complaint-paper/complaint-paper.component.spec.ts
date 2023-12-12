import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintPaperComponent } from './complaint-paper.component';

describe('ComplaintPaperComponent', () => {
  let component: ComplaintPaperComponent;
  let fixture: ComponentFixture<ComplaintPaperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplaintPaperComponent]
    });
    fixture = TestBed.createComponent(ComplaintPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
