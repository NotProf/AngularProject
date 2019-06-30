import {Component, OnInit} from '@angular/core';
import {FilmService} from '../../services/film.service';
import {Films} from '../../models/Films';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-addfilm',
  templateUrl: './addfilm.component.html',
  styleUrls: ['./addfilm.component.css']
})
export class AddfilmComponent implements OnInit {
  films: Films [] = [];
  partFilms: Films[] = [];
  public page = 1;
  public collectionSize: number;
  public maxSize = 2;
  selectedFile: File = null;
  selectedVideo: File = null;
  selectedScreen1: File = null;
  selectedScreen2: File = null;
  selectedScreen3: File = null;
  selectedScreen4: File = null;
  selectedTrailer: File = null;
  selectedAudio1: File = null;
  selectedAudio2: File = null;
  selectedAudio3: File = null;
  selectedAudio4: File = null;
  selectedActor1: File = null;
  selectedActor2: File = null;
  selectedActor3: File = null;
  selectedActor4: File = null;
  topTen: Films[] = null;
  counter = 1;

  constructor(private filmsS: FilmService) {
  }

  ngOnInit(): void {
    this.filmsS.getFilms().subscribe((res) => {
      this.films = res.reverse();
      // this.counter = this.films[this.films.length - 1].id + 1;
      this.reloadArray(1);
    });
    this.filmsS.getTopTen().subscribe((res) => {
      this.topTen = res;
    });
  }

  handleFileInput(file: FileList) {
    this.selectedFile = file.item(0);
  }

  handleVideoInput(file: FileList) {
    this.selectedVideo = file.item(0);
  }

  sendForm(form: NgForm) {
    const film: Films = form.value;
    const fd: FormData = new FormData();
    fd.append('picture', this.selectedFile);
    fd.append('movie', this.selectedVideo);
    fd.append('name', film.name);
    fd.append('aboutFilm', film.aboutFilm);
    fd.append('country', film.country);
    fd.append('quality', film.quality);
    fd.append('year', film.year);
    fd.append('genre', film.genre.toString());
    fd.append('screenShots1', this.selectedScreen1);
    fd.append('screenShots2', this.selectedScreen2);
    fd.append('screenShots3', this.selectedScreen3);
    fd.append('screenShots4', this.selectedScreen4);
    fd.append('trailer', this.selectedTrailer);
    fd.append('audio1', this.selectedAudio1);
    fd.append('audio2', this.selectedAudio2);
    fd.append('audio3', this.selectedAudio3);
    fd.append('audio4', this.selectedAudio4);
    fd.append('actor1', form.value.actor1);
    fd.append('imgActor1', this.selectedActor1);
    fd.append('actor2', form.value.actor2);
    fd.append('imgActor2', this.selectedActor2);
    fd.append('actor3', form.value.actor3);
    fd.append('imgActor3', this.selectedActor3);
    fd.append('actor4', form.value.actor4);
    fd.append('imgActor4', this.selectedActor4);

    this.filmsS.addFilm(fd).subscribe((newFilm) => {
      this.films.push(newFilm);
    });
    // form.onReset();
    this.ngOnInit();
  }


  deleteOne(id: number) {
    this.filmsS.delFilm(id).subscribe((res) => {
      this.films = res;
      this.reloadArray(1);
    });
  }

  onPageChange(p: number) {
    const url = location.href;
    location.href = '#up';
    history.replaceState(null, null, url);
    this.reloadArray(p);
  }
  reloadArray(p: number) {
    this.collectionSize = this.films.length;
    if (p === 1) {
      this.partFilms = this.films.slice(0, this.maxSize);
    } else {
      const first = Number(this.maxSize) * Number(p) - Number(this.maxSize);
      const last = Number(this.maxSize) * Number(p);
      this.partFilms = this.films.slice(first, last);
    }
  }
  handleScreenShots1Input(files: any) {
    this.selectedScreen1 = files.item(0);
  }

  handleScreenShots2Input(files: any) {
    this.selectedScreen2 = files.item(0);
  }

  handleScreenShots3Input(files: any) {
    this.selectedScreen3 = files.item(0);
  }

  handleScreenShots4Input(files: any) {
    this.selectedScreen4 = files.item(0);
  }

  handleTrailerInput(files: any) {
    this.selectedTrailer = files.item(0);
  }

  handleAudioInput1(files: any) {
    this.selectedAudio1 = files.item(0);
  }

  handleAudioInput2(files: any) {
    this.selectedAudio2 = files.item(0);
  }

  handleAudioInput3(files: any) {
    this.selectedAudio3 = files.item(0);
  }

  handleAudioInput4(files: any) {
    this.selectedAudio4 = files.item(0);
  }

  handleActor1(files: any) {
    this.selectedActor1 = files.item(0);
  }
  handleActor2(files: any) {
    this.selectedActor2 = files.item(0);
  }
  handleActor3(files: any) {
    this.selectedActor3 = files.item(0);
  }
  handleActor4(files: any) {
    this.selectedActor4 = files.item(0);
  }
}

