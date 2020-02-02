import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CoursesComponent} from './courses.component';
import {CourseComponent } from './course/course.component';
import {CoursesService} from './courses.service';
import {AuthorsComponent} from './authors.component';
import {AuthorsService} from './authors.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { LovesComponent } from './loves/loves.component';
import { PanelComponent } from './panel/panel.component';
import {CourseService} from './course.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
     FavoriteComponent,
     LovesComponent,
     PanelComponent
  ],
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    AuthorsService,
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
