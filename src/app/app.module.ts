import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { LastNamePipe } from './last-name.pipe';
import { DirectDirective } from './direct.directive';
import {RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: ProfileComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LastNamePipe,
    DirectDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
