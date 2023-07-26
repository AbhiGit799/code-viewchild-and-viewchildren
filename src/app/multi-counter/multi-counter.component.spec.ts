import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiCounterComponent } from './multi-counter.component';

describe('MultiCounterComponent', () => {
  let component: MultiCounterComponent;
  let fixture: ComponentFixture<MultiCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
