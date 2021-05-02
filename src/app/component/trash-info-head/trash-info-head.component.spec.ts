import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashInfoHeadComponent } from './trash-info-head.component';

describe('TrashInfoHeadComponent', () => {
  let component: TrashInfoHeadComponent;
  let fixture: ComponentFixture<TrashInfoHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrashInfoHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashInfoHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
