import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrappingComponent } from './bootstrapping.component';

describe('BootstrappingComponent', () => {
  let component: BootstrappingComponent;
  let fixture: ComponentFixture<BootstrappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BootstrappingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstrappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
