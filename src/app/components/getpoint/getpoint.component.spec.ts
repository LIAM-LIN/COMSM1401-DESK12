import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetpointComponent } from './getpoint.component';

describe('GetpointComponent', () => {
  let component: GetpointComponent;
  let fixture: ComponentFixture<GetpointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetpointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
