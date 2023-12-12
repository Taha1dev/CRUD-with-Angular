import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupOneComponent } from './group-one.component';

describe('GroupOneComponent', () => {
  let component: GroupOneComponent;
  let fixture: ComponentFixture<GroupOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupOneComponent]
    });
    fixture = TestBed.createComponent(GroupOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
