import {Injectable} from "@angular/core";
import {Membre} from "../models/membre.model";
import {employee} from "../models/membre.model";

import {activite} from "../models/activite.model";

Injectable({
  providedIn: 'root'
})
export class AppService {
  membres: Membre[] = [
    {
      id: 133,
      title: 'boubacar',
      dateofbirth: new Date(1982, 12, 19),
      status: 'membres',
      email:'siradio156@gmail.com',
      ceinture:'noire',


      afficheUrl: 'assets/membres/membres/membre1.jpg',
      like: 173,
      note: 4.3,
    },
    {
      id: 134,
      title: 'Mamadou',
      dateofbirth: new Date(1985, 12, 19),
      status: 'membres',
      email:'mamadou156@gmail.com',
      ceinture:'rouge',


      afficheUrl: 'assets/membres/membres/membre2.jpg',
      like: 196,
      note: 10,

    },
    {
      id: 154,
      title: 'Phillip',
      dateofbirth: new Date(2000, 12, 19),
      status: 'formateur',
      email:'philip23@gmail.com',
      ceinture:'noire',


      afficheUrl: 'assets/membres/membres/membre3.jpg',
      like: 196,
      note: 25,
    },
    {
      id: 155,
      title: 'Hannah',
      dateofbirth: new Date(2004, 12, 19),
      status: 'Eleve',
      email:'Hannah23@gmail.com',
      ceinture:'Orange',


      afficheUrl: 'assets/membres/membres/membre4.jpg',
      like: 196,
      note: 25,
    },
    {
      id: 156,
      title: 'Beaugas',
      dateofbirth: new Date(2004, 12, 23),
      status: 'formateur',
      email:'Hannah23@gmail.com',
      ceinture:'rouge',


      afficheUrl:'assets/membres/membres/membre5.jpg',
      like: 196,
      note: 25,
    },
    {
      id: 167,
      title: 'Oidaris',
      dateofbirth: new Date(2002, 12, 23),
      status: 'formateur',
      email:'Oidaris23@gmail.com',
      ceinture:'noire',


      afficheUrl: 'assets/membres/membres/membre6.jpg',
      like: 196,
      note: 25,
    }
  ];
  employee: employee[] = [
    {
      id: 27,
      title: 'boubacar sow',
      dateofbirth: new Date(1982, 12, 19),
      status: 'membres',
      email:'boubacar@gmail.com',
      salaire:1200,


      afficheUrl: 'assets/employee/image1.jpg',
      like: 173,
      note: 4.3,
    },
    {
      id: 28,
      title: 'Mamadou barry',
      dateofbirth: new Date(1985, 12, 19),
      status: 'membres',
      email:'mamadou1565@gmail.com',
      salaire:1300,


      afficheUrl: 'assets/employee/image2.jpg',
      like: 196,
      note: 10,

    },
    {
      id: 29,
      title: 'alphonse',
      dateofbirth: new Date(1985, 12, 19),
      status: 'employee',
      email:'alphonde5@gmail.com',
      salaire:1400,


      afficheUrl: 'assets/employee/image3.jpg',
      like: 196,
      note: 10,

    },
    {
      id: 30,
      title: 'oumar',
      dateofbirth: new Date(1985, 12, 19),
      status: 'employee',
      email:'Oumar@gmail.com',
      salaire:1500,


      afficheUrl: 'assets/employee/image4.jpg',
      like: 196,
      note: 10,

    },
    {
      id: 31,
      title: 'Albert',
      dateofbirth: new Date(1985, 12, 19),
      status: 'employee',
      email:'Oumar@gmail.com',
      salaire:1500,


      afficheUrl: 'assets/employee/image5.jpg',
      like: 196,
      note: 10,

    },
    {
      id: 32,
    title: 'Camus',
    dateofbirth: new Date(1985, 12, 19),
    status: 'employee',
    email:'Camus@gmail.com',
    salaire:1500,

      like: 196,


    afficheUrl: 'assets/employee/image6.jpg',
    note: 10,

}
    ];
  activites: activite[] = [
    {
      id: 1,
      title: 'Les combats',
      description:'Les combat sont l’aspect sportif du karaté. Ils ne sont autorisés en compétition qu’à partir iellement d’une initiation' +
        'A l’intérieur du Dojo, ils portent le nom de Rendori et serviront ' +
        'à automatiser des enchaînements de techniques (blocages, esquives, attaques et contre-attaques). ',




      afficheUrl: 'assets/activites/activite1.png'

    },
    {
      id: 2,
      title: 'Les katas',
      description:'les katas sont des enchaînements de techniques codifiées. A chaque passage de ceinture, la réalisation d’un kata plus élaboré est demandé par le professeur.' +
        'Le kata c’est surtout un creuset de techniques et de situations de combat, ce qui en fait une partie très enrichissante du Karaté.' +
        'Pour obtenir la ceinture noire, il faut être capable d’en réaliser 2 sur une liste définie de 8.  ',




      afficheUrl: 'assets/activites/activite2.png'
    },
    {
      id: 3,
      title: 'Les karate des enfants',
      description:'e Karaté enfant s’appuie sur une pédagogie adaptée. A travers les valeurs véhiculées par le code moral et les diverses formes de ' +
        'pratiques proposées en karaté, les enfants, filles ou garçon, sont de plus en plus nombreux à s’essayer à cette discipline. Respect de l’autre, ' +
        'contrôle de soi, entre-aide et partage sont des valeurs fortes. ',




      afficheUrl: 'assets/activites/activite3.png'
    },
    {
      id: 4,
      title: 'Le body Karate',
      description:'Le Body karaté, développée par la Fédération Française de Karaté depuis le début des années 2000, est pratiquée à 90 % par des femmes. ' +
        'Le Body Karaté peut également être pratiqué ' +
        'par les hommes ! L’avantage de ce cours est qu’il n’y a pas besoin d’être pratiquant de Karaté pour en retirer tous les bienfaits. ',




      afficheUrl: 'assets/activites/activite4.png'
    }

  ]
  searchtext="";

  getAllMembres(): Membre[] {
    return this.membres;
  }

  getMembreById(membreid: number): Membre {
    const membre = this.membres.find(membre => membre.id ==membreid);
    if(!membre) {
      throw new Error('Episode not found!');
    } else {
      return membre;
    }
  }

  /*likeEpisodeById(membreId: number, likeType: 'like'|'unlike'): void {
    const membre = this.getMembreById(membreId);
    if(likeType == 'like') {
      membre.like++;
    } else {
      membre.like--;
    }
  }*/
  //ceci represente les methodes des employees
  getAllEmployes(): employee[] {
    return this.employee;
  }

  getEmployeById(membreid: number): employee {
    const membre = this.employee.find(membre => membre.id ==membreid);
    if(!membre) {
      throw new Error('Episode not found!');
    } else {
      return membre;
    }
  }

  /*likeEpisodeByIds(membreId: number, likeType: 'like'|'unlike'): void {
    const membre = this.getEmployeById(membreId);
    if(likeType == 'like') {
      membre.like++;
    } else {
      membre.like--;
    }
  }*/
  addMembre(formValue: {title:string,dateofbirth:Date, status:string,ceinture:string,email: string, afficheUrl:string }) {
    const membre: Membre= {
      ...formValue,
      like: 0,
      note: 0,
      id: this.membres[this.membres.length - 1].id + 1
    };
    this.membres.push(membre);
  }
  getActivityById(activiteid: number): activite {
    const activite = this.activites.find(activite => activite.id ==activiteid);
    if(!activite) {
      throw new Error('Episode not found!');
    } else {
      return activite;
    }
  }
  getAllActivities(): activite[] {
    return this.activites;
  }




}
