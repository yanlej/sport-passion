import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSPComponent } from './service-sp.component';

describe('ServiceSPComponent', () => {
  let component: ServiceSPComponent;
  let fixture: ComponentFixture<ServiceSPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceSPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
