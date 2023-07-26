import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiParentColorComponent } from './multi-parent-color.component';

describe('MultiParentColorComponent', () => {
  let component: MultiParentColorComponent;
  let fixture: ComponentFixture<MultiParentColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiParentColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiParentColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
