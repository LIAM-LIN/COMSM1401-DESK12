import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GametopbarComponent } from './gametopbar.component';

describe('GametopbarComponent', () => {
  let component: GametopbarComponent;
  let fixture: ComponentFixture<GametopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GametopbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GametopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
