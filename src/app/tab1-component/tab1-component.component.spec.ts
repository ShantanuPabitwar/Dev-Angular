import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1ComponentComponent } from './tab1-component.component';

describe('Tab1ComponentComponent', () => {
  let component: Tab1ComponentComponent;
  let fixture: ComponentFixture<Tab1ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tab1ComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tab1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
