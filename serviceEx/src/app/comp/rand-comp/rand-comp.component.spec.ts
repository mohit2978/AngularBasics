import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandCompComponent } from './rand-comp.component';

describe('RandCompComponent', () => {
  let component: RandCompComponent;
  let fixture: ComponentFixture<RandCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RandCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
