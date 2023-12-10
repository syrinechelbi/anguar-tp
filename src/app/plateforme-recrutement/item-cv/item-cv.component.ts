import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from '../cv.model';
import { ActivatedRoute } from '@angular/router';
import { CvService } from '../cv.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css'],
  standalone:true,
  imports:[CommonModule]
})
export class ItemCvComponent implements OnInit{

 
  @Input () cv: Cv ={ id: 0, name: '', firstname:'',job: '', age:0, cin: '',path:'' };
  @Output () selectedCv = new EventEmitter<Cv>();

  constructor(private cvService: CvService) { }

  ngOnInit(): void {
  }

  selectCv(){
    //emmetre un evt et y injecter le
   this.selectedCv.emit(this.cv);
   this.cvService.selectCv(this.cv);
   console.log('select');
   

   
  }

 
}
