import { Component, OnInit } from '@angular/core';

import { Chart, registerables } from 'chart.js';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  resultat: any;
  roleName: any;
  roleNombre: any;
  chart: any = [];

  constructor( private service: AuthService) { 

    Chart.register(...registerables)
    
  }

  ngOnInit(): void {

    this.service.roleData().then((res) => {
      this.resultat = res;
      
      this.roleName = this.resultat.map((role: any) => role.nom_role)
      this.roleNombre = this.resultat.map((role: any) => role.nombre)

      console.log(this.roleName, this.roleNombre)

    

    

      //Affichage graphique

      const labels = this.roleName;

      this.chart = new Chart('canvas', {

        type: 'bar',
        data: {

          labels: labels,
          datasets: [
            {
              label: 'nombre d\'utilisateurs par rôles',
              data: this.roleNombre,
              borderWidth: 1,
              backgroundColor: ['red','green'],
              borderColor: '#3e95cd',
              barThickness: 50,
            }
          ],
        },
      });

    })
  }

}
