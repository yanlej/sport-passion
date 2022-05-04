import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

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

    private route: ActivatedRoute
    
  ) { }

  ngOnInit(): void {

    const idActivite = this.route.snapshot.paramMap.get('id');
    console.log(idActivite);
  }

}
