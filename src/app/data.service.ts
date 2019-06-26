<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) {}

  onGuardarPersonas( personas: Persona[]) {
    this.httpClient.put('https://app-listado-personas-64fad.firebaseio.com/datos.json', personas).subscribe(
      response => { console.log('resultado de guardar personas' + response); },
      error => { console.log('error' + error); }
    );
  }

  onGetPersonas() {
    return this.httpClient.get('https://app-listado-personas-64fad.firebaseio.com/datos.json');
  }

  onModificarPersona(indice: number, persona: Persona) {
    const url: string = 'https://app-listado-personas-64fad.firebaseio.com/datos/' + indice + '.json';
    this.httpClient.put(url, persona).subscribe(
      response => { console.log('resultado de modificar personas' + response); },
      error => { console.log('error' + error); }
    );
  }

  onEliminarPersona(indice: number) {
    const url: string = 'https://app-listado-personas-64fad.firebaseio.com/datos/' + indice + '.json';
    this.httpClient.delete(url).subscribe(
      response => { console.log('resultado de eliminar personas' + response); },
      error => { console.log('error' + error); }
    );
  }
}
=======
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) {}

  onGuardarPersonas( personas: Persona[]) {
    this.httpClient.put('https://app-listado-personas-64fad.firebaseio.com/datos.json', personas).subscribe(
      response => { console.log('resultado de guardar personas' + response); },
      error => { console.log('error' + error); }
    );
  }

  onGetPersonas() {
    return this.httpClient.get('https://app-listado-personas-64fad.firebaseio.com/datos.json');
  }

  onModificarPersona(indice: number, persona: Persona) {
    const url: string = 'https://app-listado-personas-64fad.firebaseio.com/datos/' + indice + '.json';

    this.httpClient.put(url, persona).subscribe(
      response => { console.log('resultado de modificar personas' + response); },
      error => { console.log('error' + error); }
    );
  }
}
>>>>>>> 640188f062269582063479223714d841a0c7db50
