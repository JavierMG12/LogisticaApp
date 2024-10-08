import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesComponentComponent } from './features-component.component';

describe('FeaturesComponentComponent', () => {
  let component: FeaturesComponentComponent;
  let fixture: ComponentFixture<FeaturesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
