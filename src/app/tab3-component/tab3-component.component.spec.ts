import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab3ComponentComponent } from './tab3-component.component';

describe('Tab3ComponentComponent', () => {
  let component: Tab3ComponentComponent;
  let fixture: ComponentFixture<Tab3ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tab3ComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tab3ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
