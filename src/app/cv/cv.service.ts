import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: any[] = [
    { id: 1, name: 'John ', firstname: ' Doe', age: '26' , cin: '12345678', job: 'Senior Developer', path: '' },
    { id: 2, name: 'John ', firstname: ' Doe', age: '26' , cin: '12345678', job: 'Senior Developer', path: '' },
    { id: 3, name: 'John ', firstname: ' Doe', age: '26' , cin: '12345678', job: 'Senior Developer', path: '' },
    { id: 4, name: 'John ', firstname: ' Doe', age: '26' , cin: '12345678', job: 'Senior Developer', path: '' },
  ];

  getAllCvs(): any[] {
    return this.cvs;
  }

  getCvById(id: number): any {
    return this.cvs.find((cv) => cv.id === id);
  }
}