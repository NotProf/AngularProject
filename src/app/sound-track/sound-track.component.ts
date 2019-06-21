import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-sound-track',
  templateUrl: './sound-track.component.html',
  styleUrls: ['./sound-track.component.css']
})
export class SoundTrackComponent implements OnInit {
  @ViewChild('audioOption') audioPlayerRef: ElementRef;

  onAudioPlay() {
    this.audioPlayerRef.nativeElement.play();
  }
  constructor() { }

  ngOnInit() {
  }

}
