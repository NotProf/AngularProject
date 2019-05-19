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
  imageUrl: string [] = [];
  counter = 1;

  constructor(private filmsS: FilmService, private http: HttpClient) {
    }

  ngOnInit(): void {
    this.filmsS.getFilms().subscribe((res) => {
      this.films = res;
      this.counter = this.films[this.films.length - 1].id + 1 ;
      console.log(this.counter);
      });
  }

  sendForm(form: NgForm) {
    const film: Films = form.value;
    this.filmsS.addFilm(film).subscribe((newFilm) => {
      this.films.push(newFilm);
      });
  }

  deleteOne(id: number) {
    this.filmsS.delFilm(id).subscribe((res) => {
      this.films = res;
    });
  }

  handleFileInput(file: FileList) {
    this.selectedFile = file.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl[this.counter] = event.target.result;
      this.counter++;
    };
    reader.readAsDataURL(this.selectedFile);
  }

}
