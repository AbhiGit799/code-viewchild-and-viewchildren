import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpCounterComponent } from './op-counter.component';

describe('OpCounterComponent', () => {
  let component: OpCounterComponent;
  let fixture: ComponentFixture<OpCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
