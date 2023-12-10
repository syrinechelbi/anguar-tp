import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CvService } from '../plateforme-recrutement/cv.service';
import { Cv } from '../plateforme-recrutement/cv.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  cvId: number | undefined;
  cvDetails: Cv | undefined;

  constructor(private route: ActivatedRoute, private cvService: CvService) {}

  ngOnInit(): void {
      // Récupérer l'ID du CV à partir de la route
      this.route.params.subscribe(params => {
          this.cvId = +params['id'];

          // Charger les détails du CV à partir du service
          this.cvService.getCvById(this.cvId).subscribe(
              (cvDetails: Cv| undefined)  => {
                  this.cvDetails = cvDetails;
              },
              (error: any) => {
                  console.error('Erreur lors de la récupération des détails du CV', error);
              }
          );
      });
  }
}