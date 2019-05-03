import {Component, OnInit} from '@angular/core';
import {FilmService} from '../../services/film.service';
import {Films} from '../../models/Films';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-addfilm',
  templateUrl: './addfilm.component.html',
  styleUrls: ['./addfilm.component.css']
})
export class AddfilmComponent implements OnInit {
  films: Films [] = [];
  selectedFile: File = null;
  userHome = 'E:\\OKTENPROJ\\src\\assets\\';
  counter = 1;

  constructor(private filmsS: FilmService) {
    }

  ngOnInit(): void {
    this.filmsS.getFilms().subscribe((res) => {
      this.films = res;
      this.counter = this.films[this.films.length - 1].id + 1 ;
      console.log(this.counter);
    });
  }
  handleFileInput(file: FileList) {
    this.selectedFile = file.item(0);

  }

  sendForm(form: NgForm) {
    const film: Films = form.value;
    const fd: FormData = new FormData();
    fd.append('picture', this.selectedFile);
    fd.append('name', film.name);
    fd.append('aboutFilm', film.aboutFilm);
    fd.append('country', film.country);
    fd.append('quality', film.quality);
    fd.append('year', film.year);
    this.filmsS.addFilm(fd).subscribe((newFilm) => {
      this.films.push(newFilm);
      });
  }

  deleteOne(id: number) {
    this.filmsS.delFilm(id).subscribe((res) => {
      this.films = res;
    });
  }
}

