import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { map } from 'rxjs/operators';

import gql from 'graphql-tag';

import { Usuario, Query } from './types';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  use: Observable<Usuario[]>;

  constructor( private apollo: Apollo ) { }

  ngOnInit(){
    this.use = this.apollo.watchQuery<Query>({
      query: gql`
       query getUsuarios {
        getUsuarios {
           id
           nombre,
           apellido,
           nickname

         }
       
       }`
    }).valueChanges
    .pipe(
      map(result => result.data.getUsuarios)
      
    );
    
  }

  

  

}
