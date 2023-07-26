import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiCounterParentComponent } from './multi-counter-parent.component';

describe('MultiCounterParentComponent', () => {
  let component: MultiCounterParentComponent;
  let fixture: ComponentFixture<MultiCounterParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiCounterParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiCounterParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
