import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { UserpageComponent } from './userpage/userpage.component';
import {FilmComponent} from './film/film.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'userpage', component: UserpageComponent},
  {path: 'film', component: FilmComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserpageComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
