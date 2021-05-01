import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashInfoPageComponent } from './trash-info-page.component';

describe('TrashInfoPageComponent', () => {
  let component: TrashInfoPageComponent;
  let fixture: ComponentFixture<TrashInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrashInfoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
