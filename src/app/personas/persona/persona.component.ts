import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input() persona: Persona;
  @Input() indice: string;
  @Output() editar = new EventEmitter();

  constructor(private personaService: PersonasService,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
      iconRegistry.addSvgIcon(
        'editar',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/edit.svg'));
      iconRegistry.addSvgIcon(
        'delete',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/delete.svg'));
    }

  ngOnInit() {
  }

  onEditar() {
    this.editar.emit({indice: this.indice, persona : this.persona});
  }

  onEliminar(indice: number) {
    this.personaService.onEliminarPersona(indice);
  }
}
