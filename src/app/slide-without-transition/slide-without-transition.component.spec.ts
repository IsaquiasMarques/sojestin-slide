import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideWithoutTransitionComponent } from './slide-without-transition.component';

describe('SlideWithoutTransitionComponent', () => {
  let component: SlideWithoutTransitionComponent;
  let fixture: ComponentFixture<SlideWithoutTransitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideWithoutTransitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideWithoutTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
