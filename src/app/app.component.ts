import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'listado-personas';
  _personas: Persona[];
  mostrarEdicion: boolean;
  persona: Persona;
  indice: number;

  constructor(private personasService: PersonasService) {}

  ngOnInit(): void {
<<<<<<< HEAD
    this.persona = new Persona('', '');
    // this._personas = this.personasService.onObtenerPersonas();
=======
>>>>>>> 640188f062269582063479223714d841a0c7db50
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
<<<<<<< HEAD
    const personaSeleccionada = new Persona(obj.persona._nombre, obj.persona._apellido);
    this.persona = personaSeleccionada;
=======
    this.persona = obj.persona;
>>>>>>> 640188f062269582063479223714d841a0c7db50
    this.indice = obj.indice;
  }

  cerrarForm(cerrarFormulario: boolean) {
    this.mostrarEdicion = cerrarFormulario;
  }

}
