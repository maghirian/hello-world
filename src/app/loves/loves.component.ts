import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'loves',
  templateUrl: './loves.component.html',
  styleUrls: ['./loves.component.css']
})
export class LovesComponent implements OnInit {
  @Input() isLoves:boolean ;
  @Output() change= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isLoves = !this.isLoves;
    this.change.emit();
  }

}
