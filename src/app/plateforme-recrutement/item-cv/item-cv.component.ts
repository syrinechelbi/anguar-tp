import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from '../cv.model';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css'],
  standalone:true,
  imports:[]
})
export class ItemCvComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
  }
  @Input() cv=new Cv(0,'','',0,'0','','');
  @Output() selectCvRqst=new EventEmitter();
  emitCv(){
    this.selectCvRqst.emit(this.cv);
  }
}
