import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferChoicesComponent } from './transfer-choices.component';

describe('TransferChoicesComponent', () => {
  let component: TransferChoicesComponent;
  let fixture: ComponentFixture<TransferChoicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferChoicesComponent]
    });
    fixture = TestBed.createComponent(TransferChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
