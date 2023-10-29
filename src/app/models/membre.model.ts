export class employee {
  id: number;
  title: string;
  dateofbirth: Date;
  status: string;
  email: string;
  salaire: number;


  afficheUrl: string;
  like: number;
  note?: number;

  constructor(id: number, title: string, dateofbirth: Date, status: string, email: string, salaire:number, afficheUrl: string, like: number, note?: number) {
    this.id = id;
    this.title = title;
    this.dateofbirth = dateofbirth;
    this.status = status;
    this.email = email;
    this.salaire = salaire;

    this.afficheUrl = afficheUrl;
    this.like = like;
    this.note = note;


  }
}
export class Membre  {
  id: number;
  title: string;
  dateofbirth: Date;
  status: string;
  ceinture: string;
  email: string;

  afficheUrl: string;
  like: number;
  note?: number;

  constructor(id: number, title: string, dateofbirth: Date, status: string,email:string  ,ceinture:string, afficheUrl: string, like: number, note?: number) {
    this.id = id;
    this.title = title;
    this.dateofbirth =dateofbirth;
    this.status= status;
    this.email = email;
    this.ceinture=ceinture;

    this.afficheUrl = afficheUrl;
    this.like = like;
    this.note = note;
  }
}
