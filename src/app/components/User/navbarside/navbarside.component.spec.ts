import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarsideComponent } from './navbarside.component';

describe('NavbarsideComponent', () => {
  let component: NavbarsideComponent;
  let fixture: ComponentFixture<NavbarsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
