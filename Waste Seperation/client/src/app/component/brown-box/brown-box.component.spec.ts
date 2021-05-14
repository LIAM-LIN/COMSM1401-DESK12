import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrownBoxComponent } from './brown-box.component';

describe('BrownBoxComponent', () => {
  let component: BrownBoxComponent;
  let fixture: ComponentFixture<BrownBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrownBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrownBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
