import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueBoxComponent } from './blue-box.component';

describe('BlueBoxComponent', () => {
  let component: BlueBoxComponent;
  let fixture: ComponentFixture<BlueBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
