import { Component, Input } from '@angular/core';
import { CvService } from '../cv/cv.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css'],
  standalone:true,
  imports:[NgIf]
})
export class DetailCvComponent {
  @Input() selectedCvId: number | undefined;
  selectedCv: any;

  constructor(private cvService: CvService) {}

  ngOnChanges(): void {
    if (this.selectedCvId) {
      this.selectedCv = this.cvService.getCvById(this.selectedCvId);
    }
  }
  showCvDetails(id: number): void {
    this.selectedCvId = id;
  }

}
