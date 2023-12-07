import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';
import { ItemCvComponent } from '../item-cv/item-cv.component';
import { ActivatedRoute } from '@angular/router';
import { Cv } from '../cv.model';

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.css'],
  standalone:true,
  imports:[ItemCvComponent]
})
export class ListeCvComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() cvs: Cv[]=[];
  @Output() selectCvRqst=new EventEmitter();
  emitCv(cv:Cv){
    this.selectCvRqst.emit(cv);
  }

}
