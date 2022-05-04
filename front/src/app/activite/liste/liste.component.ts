import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  public activites: any[] = [

    { 
      id: '1',
      date: '23/11/2021',
      categorie: 'EVS',
      pole: 'Handicap',
      service: 'Foot Adapté',
      lieu: 'Stade Moureu',
      description: 'Match de foot de la ligue',
      duree: '2h00',
      enseignant: 'Zinedine Zidane'
    },
    { 
      id: '2',
      date: '24/11/2021',
      categorie: 'MSS',
      pole: 'Maladie Chronique',
      service: 'Bouger sur ordonnance',
      lieu: 'Stade Moureu',
      description: 'Athletisme',
      duree: '2h00',
      enseignant: 'Lozano Christophe'
    },
  ]

  constructor(

    
  ) { }

  ngOnInit(): void {

    

  }

}
