import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngArchitectureComponent } from './ang-architecture.component';

describe('AngArchitectureComponent', () => {
  let component: AngArchitectureComponent;
  let fixture: ComponentFixture<AngArchitectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngArchitectureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngArchitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
