import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaIDComponent } from './pelicula-id.component';

describe('PeliculaIDComponent', () => {
  let component: PeliculaIDComponent;
  let fixture: ComponentFixture<PeliculaIDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaIDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
