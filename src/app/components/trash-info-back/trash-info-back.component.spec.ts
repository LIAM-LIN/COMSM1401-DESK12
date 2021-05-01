import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashInfoBackComponent } from './trash-info-back.component';

describe('TrashInfoBackComponent', () => {
  let component: TrashInfoBackComponent;
  let fixture: ComponentFixture<TrashInfoBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrashInfoBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashInfoBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
