import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashInfoSlideComponent } from './trash-info-slide.component';

describe('TrashInfoSlideComponent', () => {
  let component: TrashInfoSlideComponent;
  let fixture: ComponentFixture<TrashInfoSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrashInfoSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashInfoSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
