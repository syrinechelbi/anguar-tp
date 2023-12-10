export class Cv{
    id: number;
    name: string;
    firstname: string;
    age: number;
    path: string;
    cin: string;
    job: string;
  
    constructor(id:number, name:string, firstname:string, age:number, path:string, cin:string, job:string) {
      this.id = id;
      this.name = name;
      this.firstname = firstname;
      this.age = age;
      this.path = path;
      this.cin = cin;
      this.job = job;
    }
  
  }