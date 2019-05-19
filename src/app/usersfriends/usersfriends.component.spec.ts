import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersfriendsComponent } from './usersfriends.component';

describe('UsersfriendsComponent', () => {
  let component: UsersfriendsComponent;
  let fixture: ComponentFixture<UsersfriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersfriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersfriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
