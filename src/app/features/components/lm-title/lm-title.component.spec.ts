import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmTitleComponent } from './lm-title.component';

describe('LmTitleComponent', () => {
  let component: LmTitleComponent;
  let fixture: ComponentFixture<LmTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LmTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
