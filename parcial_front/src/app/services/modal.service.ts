import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalCreateUser = signal<boolean>(true);
  modalUpdateUser = signal<boolean>(true);
  modalSearchedUser = signal<boolean>(true);

  mostrarUsuarioBuscado = signal<boolean>(true);

  modalAsignacionPermisos = signal<boolean>(true);

  public showModalCreateSwitch() {
    this.modalCreateUser.set(!this.modalCreateUser());
  }

  public showModalUpdateSwitch() {
    this.modalUpdateUser.set(!this.modalUpdateUser());
  }

  public showModalSearchedUserSwitch() {
    this.modalSearchedUser.set(!this.modalSearchedUser());
  }

  public mostrarUsuarioBuscadoSwitch() {
    this.mostrarUsuarioBuscado.set(!this.mostrarUsuarioBuscado());

  }
  public mostrarAsignacionPermisosSwitch() {
    this.modalAsignacionPermisos.set(!this.modalAsignacionPermisos());
  }

  constructor() { }

}
