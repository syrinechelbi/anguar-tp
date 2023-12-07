import { Component, OnInit } from '@angular/core';
import { ListeCvComponent } from '../liste-cv/liste-cv.component';
import { DetailCvComponent } from '../detail-cv/detail-cv.component';
import { Cv } from '../cv.model';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  standalone:true,
  imports:[ListeCvComponent,DetailCvComponent]
})
export class CvComponent implements OnInit {

  cvs: Cv []= [];
  selectedCv!: Cv;


  constructor(private cvService:CvService) { }

  ngOnInit(): void {
    // this.cvs =[
    //   new Cv(1,'absike','idriss',25,'meToon.jpg','It Engineer'),
    //   new Cv(2,'kamoun','aymen',27,'img.png','BI Engineer')
    // ];
    this.cvs=this.cvService.getCvs();

  }
  selectCv(cv:any){
    this.selectedCv=cv;
  }

}