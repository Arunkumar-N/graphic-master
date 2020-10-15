import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadComponent } from './lead.page';

describe('LeadComponent', () => {
  let component: LeadComponent;
  let fixture: ComponentFixture<LeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
