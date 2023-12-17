import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParCompoComponent } from './par-compo.component';

describe('ParCompoComponent', () => {
  let component: ParCompoComponent;
  let fixture: ComponentFixture<ParCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParCompoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
