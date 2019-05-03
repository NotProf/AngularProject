import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { UserpageComponent } from './userpage/userpage.component';
import {FilmComponent} from './film/film.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { SupportComponent } from './support/support.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AddfilmComponent } from './addfilm/addfilm.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { SoundTrackComponent } from './sound-track/sound-track.component';
import {LoginComponent} from "./login/login.component";
import {RegComponent} from "./reg/reg.component";
import { DescriptionOfFComponent } from './description-of-f/description-of-f.component';
import { ScreenshotsComponent } from './screenshots/screenshots.component';
import { StarringComponent } from './starring/starring.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'userpage', component: UserpageComponent},
  {path: 'film/:id', component: FilmComponent, children: [{ path: 'sound', component: SoundTrackComponent},
      {path: 'description', component: DescriptionOfFComponent},
      {path: 'screenshots' , component: ScreenshotsComponent},
      {path: 'starring', component: StarringComponent}]},
  {path: 'news', component: NewsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'support', component: SupportComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'addfilm', component: AddfilmComponent},
  {path: 'login', component: LoginComponent},
  {path: 'reg', component: RegComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserpageComponent,
    FilmComponent,
    NewsComponent,
    AboutComponent,
    SupportComponent,
    ContactsComponent,
    AddfilmComponent,
    SoundTrackComponent,
    LoginComponent,
    RegComponent,
    DescriptionOfFComponent,
    ScreenshotsComponent,
    StarringComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
