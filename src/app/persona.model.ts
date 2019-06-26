export class Persona {
  _nombre: string;
  _apellido: string;

  // otra forma de inicializar los elementos de la clase
  //  constructor(public nombre: string, public apellido: string) { }

  constructor(nombre: string, apellido: string) {
    this._nombre = nombre;
    this._apellido = apellido;
  }

}
