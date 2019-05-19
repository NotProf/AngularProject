import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfilmsComponent } from './userfilms.component';

describe('UserfilmsComponent', () => {
  let component: UserfilmsComponent;
  let fixture: ComponentFixture<UserfilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserfilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserfilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
