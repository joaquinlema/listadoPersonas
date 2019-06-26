import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';
<<<<<<< HEAD
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
=======
>>>>>>> 640188f062269582063479223714d841a0c7db50

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input() persona: Persona;
  @Input() indice: string;
  @Output() editar = new EventEmitter();

<<<<<<< HEAD
  constructor(private personaService: PersonasService,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
      iconRegistry.addSvgIcon(
        'editar',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/edit.svg'));
      iconRegistry.addSvgIcon(
        'delete',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/delete.svg'));
    }
=======
  constructor(private personaService: PersonasService) { }
>>>>>>> 640188f062269582063479223714d841a0c7db50

  ngOnInit() {
  }

  onEditar() {
    this.editar.emit({indice: this.indice, persona : this.persona});
  }

<<<<<<< HEAD
  onEliminar(indice: number) {
    this.personaService.onEliminarPersona(indice);
  }
=======
>>>>>>> 640188f062269582063479223714d841a0c7db50
}
