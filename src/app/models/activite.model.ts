export class activite  {
  id: number;
  title: string;
  description: string;


  afficheUrl: string;


  constructor(id: number, title: string, description:string,afficheUrl: string) {
    this.id = id;
    this.title = title;
    this.description=description;

    this.afficheUrl = afficheUrl;



  }
}
