import Swal from 'sweetalert2';

export class LoggingService {
    enviarMensajeConsola(titulo: string, mensaje: string, msjBoton: string) {
      Swal.fire({
        title: titulo,
        text: mensaje ,
        type: 'info',
        confirmButtonText: msjBoton
      });
    }
}
