
import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html',

  // language=HTML
  //   template: `
  //               <!--This is interpolation -->
  //               <h2> {{ title }} </h2>
  //               <ul>
  //               <li *ngFor = "let course of courses">
  //                   {{ course }}
  //               </li>
  //               </ul>
  //
  //               <!--This is property binding-->
  //               <img [src] = "imageUrl"/>
  //
  //               <table>
  //                 <tr>
  //                   <!--This is attribute binding-->
  //                   <td [attr.colSpan] = "colSpan" >Sum: $180</td>
  //                 </tr>
  //               </table>
  //
  //               <!--This is class binding followed by style binding-->
  //               <button class="btn btn-outline-primary" [class.active] = "isActive" [style.backgroundColor]="isActive? 'blue':'white'"> Execute </button>
  //
  //               <!--This is event binding as well as event bubbling-->
  //               <div (click) = "onDivClicked()">
  //                 <button (click) = "onSave($event)">Save</button>
  //               </div>
  //
  //               <!--This is event filtering and template variable -->
  //               <input #inputTyped (keyUp.enter) = "onKeyUp(inputTyped.value)"/>
  //
  //               <!--This is two way binding -->
  //               <div>
  //                 <input [(ngModel)] = "inputTyped1" (keyUp.enter) = "onKeyUp1() "/>
  //               </div>
  //
  //               <!--This for pipes that can be used for formatting numbers and strings-->
  //               <!--This is for custom pipes -->
  //   `

  })

export class CoursesComponent {

  //title = 'List of Courses';
  title;
  courses;
  imageUrl = 'http://lorempixel.com/400/200';
  colSpan = 2;
  isActive = true;
  inputTyped1 = "This is a test";

  constructor(service: CoursesService) {

      this.courses = service.getCourses();
      // if(this.courses.length>0)
      //   this.title = 'List of Courses';
      // else this.title = 'No Courses Yet';
  }

  onSave($event){
    $event.stopPropagation();
    console.log('Save was Clicked',$event);
  }

  onDivClicked(){
    console.log('Div was Clicked');
  }

  onKeyUp(inputTyped){
    console.log(inputTyped);
  }

  onKeyUp1(){
    console.log(this.inputTyped1);
  }
}
