import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideWithTransition1Component } from './slide-with-transition1.component';

describe('SlideWithTransition1Component', () => {
  let component: SlideWithTransition1Component;
  let fixture: ComponentFixture<SlideWithTransition1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideWithTransition1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideWithTransition1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
