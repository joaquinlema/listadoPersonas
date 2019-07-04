import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { LoginService } from './login/login.service';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient,
    private loginService: LoginService) {}

  onGuardarPersonas( personas: Persona[]) {
    this.httpClient.put('https://app-listado-personas-64fad.firebaseio.com/datos.json', personas).subscribe(
      response => { console.log('resultado de guardar personas' + response); },
      error => { console.log('error' + error); }
    );
  }

  onGetPersonas() {
    const token = this.loginService.getIdToken();
    return this.httpClient.get('https://app-listado-personas-64fad.firebaseio.com/datos.json?auth' + token);
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
