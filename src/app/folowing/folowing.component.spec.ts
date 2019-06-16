import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolowingComponent } from './folowing.component';

describe('FolowingComponent', () => {
  let component: FolowingComponent;
  let fixture: ComponentFixture<FolowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
