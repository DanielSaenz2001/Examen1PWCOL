import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaIDComponent } from './persona-id.component';

describe('PersonaIDComponent', () => {
  let component: PersonaIDComponent;
  let fixture: ComponentFixture<PersonaIDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaIDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
