import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesbasicsComponent } from './pipesbasics.component';

describe('PipesbasicsComponent', () => {
  let component: PipesbasicsComponent;
  let fixture: ComponentFixture<PipesbasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesbasicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipesbasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
