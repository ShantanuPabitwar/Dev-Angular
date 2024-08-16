import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab2ComponentComponent } from './tab2-component.component';

describe('Tab2ComponentComponent', () => {
  let component: Tab2ComponentComponent;
  let fixture: ComponentFixture<Tab2ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tab2ComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tab2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
