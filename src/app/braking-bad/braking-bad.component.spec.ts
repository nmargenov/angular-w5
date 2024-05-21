import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrakingBadComponent } from './braking-bad.component';

describe('BrakingBadComponent', () => {
  let component: BrakingBadComponent;
  let fixture: ComponentFixture<BrakingBadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrakingBadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrakingBadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
