<<<<<<< HEAD
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
=======
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
>>>>>>> 640188f062269582063479223714d841a0c7db50
