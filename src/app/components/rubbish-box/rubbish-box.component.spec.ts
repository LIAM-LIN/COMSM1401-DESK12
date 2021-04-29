import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubbishBoxComponent } from './rubbish-box.component';

describe('RubbishBoxComponent', () => {
  let component: RubbishBoxComponent;
  let fixture: ComponentFixture<RubbishBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RubbishBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RubbishBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
