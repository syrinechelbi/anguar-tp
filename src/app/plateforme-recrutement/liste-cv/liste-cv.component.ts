import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';
import { ItemCvComponent } from '../item-cv/item-cv.component';
import { ActivatedRoute } from '@angular/router';
import { Cv } from '../cv.model';
import { CvService } from '../cv.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.css'],
  standalone:true,
  imports:[ItemCvComponent,CommonModule]
})
export class ListeCvComponent implements OnInit {

  @Input() public cvs: Cv[] = [];
  actCv?: Cv;
  @Output() selectedCv = new EventEmitter<Cv>();

  constructor(private cvService: CvService) {}
  ngOnInit(): void {
    this.cvService.getCvs().subscribe(
      (cvs: Cv[]) =>  this.cvs = cvs,
      (err: any ) => {
        this.cvs = this.cvService.getCvs_stat();
        console.error('Une erreur est produite:', err);
      }
    );
  }

  showDetail(cv : Cv ):void{
    console.log(cv);
    this.selectedCv.emit(cv);
  }

}

