import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LosepointComponent } from './losepoint.component';

describe('LosepointComponent', () => {
  let component: LosepointComponent;
  let fixture: ComponentFixture<LosepointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LosepointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LosepointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
