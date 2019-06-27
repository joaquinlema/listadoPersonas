import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  title = 'listado-personas';
  _personas: Persona[];
  mostrarEdicion: boolean;
  persona: Persona;
  indice: number;

  constructor(private personasService: PersonasService) {}

  ngOnInit(): void {
    this.persona = new Persona('', '');
    // this._personas = this.personasService.onObtenerPersonas();
    this.personasService.onObtenerPersonas().subscribe(
      (personas: Persona[]) => {
        this._personas = personas;
        this.personasService.setPersonas(this._personas);
        this.mostrarEdicion = false;
      }
    );
  }

  onLlamarEdicion(obj: any) {
    this.mostrarEdicion = true;
    const personaSeleccionada = new Persona(obj.persona._nombre, obj.persona._apellido);
    this.persona = personaSeleccionada;
    this.indice = obj.indice;
  }

  cerrarForm(cerrarFormulario: boolean) {
    this.mostrarEdicion = cerrarFormulario;
  }

}
