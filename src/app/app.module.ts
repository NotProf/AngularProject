import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {UserpageComponent} from './userpage/userpage.component';
import {FilmComponent} from './film/film.component';
import {NewsComponent} from './news/news.component';
import {AboutComponent} from './about/about.component';
import {AddfilmComponent} from './addfilm/addfilm.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {SoundTrackComponent} from './sound-track/sound-track.component';
import {LoginComponent} from './login/login.component';
import {RegComponent} from './reg/reg.component';
import {DescriptionOfFComponent} from './description-of-f/description-of-f.component';
import {ScreenshotsComponent} from './screenshots/screenshots.component';
import {StarringComponent} from './starring/starring.component';
import {UserfilmsComponent} from './userfilms/userfilms.component';
import {NoAuthUserDirective} from './no-auth-user.directive';
import {UserAuthDirective} from './user-auth.directive';
import {UsersfriendsComponent} from './usersfriends/usersfriends.component';
import {AddButtonDirective} from './add-button.directive';
import {FolowingComponent} from './folowing/folowing.component';
import { PeopleComponent } from './people/people.component';
import { FinishRegComponent } from './finish-reg/finish-reg.component';
import { AdminDirective } from './admin.directive';



const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'userpage/:id', component: UserpageComponent, children:
      [{path: 'userfilms', component: UserfilmsComponent},
        {path: 'usersfriends', component: UsersfriendsComponent},
        {path: 'folowing', component: FolowingComponent}]
  },
  {
    path: 'film/:id', component: FilmComponent, children: [
      {path: 'sound', component: SoundTrackComponent},
      {path: 'description', component: DescriptionOfFComponent},
      {path: 'screenshots', component: ScreenshotsComponent},
      {path: 'starring', component: StarringComponent}]
  },
  {path: 'news', component: NewsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'addfilm', component: AddfilmComponent},
  {path: 'login', component: LoginComponent},
  {path: 'reg', component: RegComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'reg', component: RegComponent},
  {path: 'finishReg/:key', component: FinishRegComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserpageComponent,
    FilmComponent,
    NewsComponent,
    AboutComponent,
    AddfilmComponent,
    SoundTrackComponent,
    LoginComponent,
    RegComponent,
    DescriptionOfFComponent,
    ScreenshotsComponent,
    StarringComponent,
    UserfilmsComponent,
    NoAuthUserDirective,
    UserAuthDirective,
    UsersfriendsComponent,
    AddButtonDirective,
    FolowingComponent,
    FinishRegComponent,
    FolowingComponent,
    PeopleComponent,
    AdminDirective
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
export class AppModule {
}
