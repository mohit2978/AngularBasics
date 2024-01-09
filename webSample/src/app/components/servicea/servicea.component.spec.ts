import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceaComponent } from './servicea.component';

describe('ServiceaComponent', () => {
  let component: ServiceaComponent;
  let fixture: ComponentFixture<ServiceaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
