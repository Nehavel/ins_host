import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMovComponent } from './ver-mov.component';

describe('VerMovComponent', () => {
  let component: VerMovComponent;
  let fixture: ComponentFixture<VerMovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerMovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerMovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
