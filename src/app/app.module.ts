import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { UserpageComponent } from './userpage/userpage.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'userpage', component: UserpageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserpageComponent
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
