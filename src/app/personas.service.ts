<<<<<<< HEAD
import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class PersonasService {

  private _personas: Persona[] = [];

  constructor(private logginService: LoggingService,
              private dataService: DataService) {}

  public get personas(): Persona[] {
    return this._personas;
  }
  public setPersonas(value: Persona[]) {
    this._personas = value;
  }

  onObtenerPersonas() {
    // return this._personas;
    return this.dataService.onGetPersonas();
  }

  onAgregarPersona(persona: Persona) {
    this.logginService.enviarMensajeConsola('Persona Agregada', persona._nombre + ' ' + persona._apellido, 'ok');
    this._personas.push(persona);
    this.dataService.onGuardarPersonas(this._personas);
  }

  onModificarPersona(indice: number, persona: Persona) {
    const personaModificada = this._personas[indice];
    personaModificada._nombre = persona._nombre;
    personaModificada._apellido = persona._apellido;
    this.dataService.onModificarPersona(indice, personaModificada);
  }

  onEliminarPersona(indice: number) {
    this._personas.splice(indice, 1);
    this.dataService.onEliminarPersona(indice);
    this.modificarPersonas();
  }

  modificarPersonas() {
    if (this._personas != null) {
      this.dataService.onGuardarPersonas(this._personas);
    }
  }
}
=======
import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class PersonasService {

  private _personas: Persona[] = [];

  constructor(private logginService: LoggingService,
              private dataService: DataService) {}

  public get personas(): Persona[] {
    return this._personas;
  }
  public setPersonas(value: Persona[]) {
    this._personas = value;
  }

  onObtenerPersonas() {
    return this.dataService.onGetPersonas();
  }

  onAgregarPersona(persona: Persona) {
    this.logginService.enviarMensajeConsola('Persona Agregada', persona._nombre + ' ' + persona._apellido, 'ok');
    this._personas.push(persona);
    this.dataService.onGuardarPersonas(this._personas);
  }

  onModificarPersona(indice: number, persona: Persona) {
    this.dataService.onModificarPersona(indice, persona);
  }
}
>>>>>>> 640188f062269582063479223714d841a0c7db50
