import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cv } from '../cv.model';
import { CvService } from '../cv.service';
import { EmbaucheService } from '../embauche.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css'],
  standalone:true,
  imports:[CommonModule]
})
export class DetailCvComponent implements OnInit {
  @Input () cv: Cv = { id: 0, name: '', firstname:'',job: '', age:0, cin: '',path:'' };
  @Output() embaucheEvent = new EventEmitter<Cv>();
  
  constructor(
    private embaucheService: EmbaucheService,
    // private cvService: CvService,
    private toastr: ToastrService,private router : Router) { }

  ngOnInit(): void {

  }
  embaucher(): void{
    this.embaucheService.embaucher(this.cv);
    this.toastr.success('Le CV a été embauché avec succès.', 'Embauche');
    this.embaucheEvent.emit(this.cv);

  }
  cvDejaSelectionne(): void {
    const cvSelectionnes: Cv[] = this.embaucheService.getEmbauchees();
    const cvDejaSelectionne = cvSelectionnes.some((cv) => cv.id === this.cv.id);

    if (cvDejaSelectionne) {
      this.toastr.warning('Le CV est déjà embauché.', 'Attention');
    }

}
redirectToDetails(): void {
  this.router.navigate(['/details', this.cv.id]);
}


}

