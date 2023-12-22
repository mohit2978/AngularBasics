import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfCompComponent } from './ng-if-comp.component';

describe('NgIfCompComponent', () => {
  let component: NgIfCompComponent;
  let fixture: ComponentFixture<NgIfCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgIfCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgIfCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
