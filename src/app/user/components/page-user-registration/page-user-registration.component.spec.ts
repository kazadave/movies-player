import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUserRegistrationComponent } from './page-user-registration.component';

describe('PageUserRegistrationComponent', () => {
  let component: PageUserRegistrationComponent;
  let fixture: ComponentFixture<PageUserRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageUserRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUserRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
