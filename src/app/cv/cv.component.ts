import { Component } from '@angular/core';
import { ListCvComponent } from '../list-cv/list-cv.component';
import { DetailCvComponent } from '../detail-cv/detail-cv.component';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  standalone:true,
  imports:[ListCvComponent,DetailCvComponent]
})
export class CvComponent {
  selectedCvId: number | undefined;

  showCvDetails(id: number): void {
    this.selectedCvId = id;
  }

}
