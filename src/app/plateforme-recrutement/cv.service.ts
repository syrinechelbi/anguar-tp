import { Injectable } from '@angular/core';
import { Cv } from './cv.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CvService {

   selectCvSubject = new Subject<Cv>();
  cvs: Cv[] = [];
  constructor(private http: HttpClient
  ) {
    this.cvs = [
      new Cv(1, 'chelbi', 'Syrine', 23, 'rotating_card_profile.png', '123456', ''),
      new Cv(2, 'razki', 'wassim' , 22, 'rotating_card_profile2.png', '123456', ''),
      new Cv(3, 'chelbi', 'sou', 26, 'rotating_card_profile3.png', '123456', ''),
    ];
  }
  getCvs_stat(): Cv[]{
    return this.cvs;
  }
  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>('https://apilb.tridevs.net/explorer/personnes');
  }

  selectCv(cv: Cv): void {
    this.selectCvSubject.next(cv);
  }

  getCvById(id: number): Observable<Cv | undefined> {
    // Utilisez la méthode find pour trouver le CV pqar son ID
    const cvFound = this.cvs.find(cv => cv.id === id);

    // Vérifiez si le CV a été trouvé
    if (cvFound) {
      // Si trouvé, émettez le CV trouvé
      return of(cvFound);
    } else {
      // Si non trouvé, émettez undefined
      return of(undefined);
    }
  }
 

  
}


