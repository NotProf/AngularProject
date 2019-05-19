import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionOfFComponent } from './description-of-f.component';

describe('DescriptionOfFComponent', () => {
  let component: DescriptionOfFComponent;
  let fixture: ComponentFixture<DescriptionOfFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionOfFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionOfFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
