import Swal from 'sweetalert2';

export function successDialog(msg: string) {
    return Swal.fire({
        position: 'center',
        icon: 'success',
        text: msg,
        showConfirmButton: false,
        timer: 1500
    });
}
 
export function warningMessage(msg: string) {
    return Swal.fire({
        position: 'center',
        icon: 'warning',
        text: msg,
        showConfirmButton: true,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#65c005'
    });
}
 
export function errorMessage(msg: string) {
    return Swal.fire({
        position: 'center',
        icon: 'error',
        text: msg,
        showConfirmButton: true,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#ce2b16'
    });
}
 
export function errorMessage12(msg: string) {
    return Swal.fire({
        position: 'center',
        icon: 'error',
        text: msg,
        showConfirmButton: true,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#ce2b16'
    });
}
export function eliminacion(msg: string) {
    return Swal.fire({
        position: 'center',
        icon: 'success',
        text: "Se borro el Usuario Correctamenete",
        showConfirmButton: true,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#ff914d'
    });
}
export function eliminacion2(msg: string) {
    return Swal.fire({
        position: 'center',
        icon: 'success',
        text: "Se borro el Dato Correctamenete",
        showConfirmButton: true,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#ff914d'
    });
}

export function NOHAY(msg: string) {
    return Swal.fire({
        position: 'center',
        icon: 'error',
        text: "YA NO HAY ARTICULOOOOOS",
        showConfirmButton: true,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#ce2b16'
    });
}

export function confirmDialog(msg: string, cancel: string, confirm: string) {
    return Swal.fire({
        position: 'center',
        icon: 'warning',
        text: msg,
        showCancelButton: true,
        cancelButtonText: cancel,
        cancelButtonColor: '#ce2b16',
        showConfirmButton: true,
        confirmButtonText: confirm,
        confirmButtonColor: '#65c005'
    });
}
export function timeMessage(text:string, time) {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registro completado',
        showConfirmButton: false,
        timer: 1500
      })
    }
export function timeMessage2(text:string, time) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Inicio de sesion Exitoso',
            showConfirmButton: false,
            timer: 1500
          })
        }
export function timeMessage3(text:string, time) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Tu sesion ha sido cerrada',
                showConfirmButton: false,
                timer: 1500
              })
            }

            export function timeMessage12(text:string, time) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Ya no hay articulos',
                    showConfirmButton: false,
                    timer: 1500
                  })
                }
                export function timeMessage13(text:string, time) {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'No se guardo nada',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    }
    


 
