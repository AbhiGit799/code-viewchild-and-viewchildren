import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiThemeComponent } from './multi-theme.component';

describe('MultiThemeComponent', () => {
  let component: MultiThemeComponent;
  let fixture: ComponentFixture<MultiThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiThemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
