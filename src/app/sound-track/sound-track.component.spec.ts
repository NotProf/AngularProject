import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundTrackComponent } from './sound-track.component';

describe('SoundTrackComponent', () => {
  let component: SoundTrackComponent;
  let fixture: ComponentFixture<SoundTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
