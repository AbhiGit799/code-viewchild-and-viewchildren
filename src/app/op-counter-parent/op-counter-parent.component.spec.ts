import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpCounterParentComponent } from './op-counter-parent.component';

describe('OpCounterParentComponent', () => {
  let component: OpCounterParentComponent;
  let fixture: ComponentFixture<OpCounterParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpCounterParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpCounterParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
