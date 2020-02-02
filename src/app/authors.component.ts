import { AuthorsService } from './authors.service';
import { Component } from '@angular/core';

@Component({
  selector: 'authors',

  // language=HTML
  template: ` <h2> {{ title }} </h2>
                <ul>
                <li *ngFor = "let author of authors">
                    {{ author }} 
                </li>
                </ul> `

})

export class AuthorsComponent {

  title = 'List of Authors';
  authors;

  constructor(service: AuthorsService) {
    // let service = new CoursesService();
    this.authors = service.getAuthors();
  }
}
