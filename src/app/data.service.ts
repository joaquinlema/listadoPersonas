import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { LoginService } from './login/login.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient,
    private loginService: LoginService) {}

  onGuardarPersonas( personas: Persona[]) {
    const token = this.loginService.getIdToken();
    this.httpClient.put('https://app-listado-personas-64fad.firebaseio.com/datos.json?auth=' + token, personas).subscribe(
      response => { console.log('resultado de guardar personas' + response); },
      error => { console.log('error' + error); }
    );
  }

  onGetPersonas() {
    const token = this.loginService.getIdToken();
    return this.httpClient.get('https://app-listado-personas-64fad.firebaseio.com/datos.json?auth=' + token);
  }

  onModificarPersona(indice: number, persona: Persona) {
    const token = this.loginService.getIdToken();
    const url: string = 'https://app-listado-personas-64fad.firebaseio.com/datos/' + indice + '.json?auth=' + token;
    this.httpClient.put(url, persona).subscribe(
      response => { console.log('resultado de modificar personas' + response); },
      error => { console.log('error' + error); }
    );
  }

  onEliminarPersona(indice: number) {
    const token = this.loginService.getIdToken();
    const url: string = 'https://app-listado-personas-64fad.firebaseio.com/datos/' + indice + '.json?auth=' + token;
    this.httpClient.delete(url).subscribe(
      response => { console.log('resultado de eliminar personas' + response); },
      error => { console.log('error' + error); }
    );
  }
}
