import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrederPageComponent } from './oreder-page.component';

describe('OrederPageComponent', () => {
  let component: OrederPageComponent;
  let fixture: ComponentFixture<OrederPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrederPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrederPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
