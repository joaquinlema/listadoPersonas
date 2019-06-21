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
    this.persona = obj.persona;
    this.indice = obj.indice;
  }

  cerrarForm(cerrarFormulario: boolean) {
    this.mostrarEdicion = cerrarFormulario;
  }

}
