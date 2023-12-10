import { Component, Input, OnInit } from '@angular/core';
import { ListeCvComponent } from '../liste-cv/liste-cv.component';
import { DetailCvComponent } from '../detail-cv/detail-cv.component';
import { Cv } from '../cv.model';
import { CvService } from '../cv.service';
import { EmbaucheService } from '../embauche.service';
import { ListeEmbaucheComponent } from '../liste-embauche/liste-embauche.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  standalone:true,
  imports:[ListeCvComponent,DetailCvComponent,ListeEmbaucheComponent,CommonModule]
})
export class CvComponent implements OnInit {

  cvs: Cv[]= [];
  isSelected = false ;
  selectedCv: Cv ={ id: 0, name: '', firstname:'',job: '', age:0, cin: '',path:'' };

  constructor(private cvService: CvService) { }

  ngOnInit(): void {
    this.isSelected = false ;
    this.cvService.getCvs().subscribe(
      (cvs: Cv[]) => {
        this.cvs = cvs;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des CVs', error);
      }
    );
  }
  selectCv(cv: Cv){
    this.isSelected = true ;    
    this.selectedCv = cv;
  }

 
}