import {Component, HostListener, inject, input, Output} from '@angular/core';
import {AuthService} from "../../auth.service";
import {NgIf} from "@angular/common";
import {loadEsmModuleFromMemory} from "@angular-devkit/build-angular/src/utils/server-rendering/load-esm-from-memory";
import EventEmitter from "node:events";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  authService = inject(AuthService)
  isLoginShowed: boolean = false;
  constructor() {

  }
  logout(): void {
    this.authService.logout();
  }

  toggleLogin(): void{
    let login = document.querySelector(".flotante.login");
    if (this.isLoginShowed){
      login?.classList.remove("showed");
      login?.classList.add("oculto");
      this.isLoginShowed = false;
    } else {
      login?.classList.remove("oculto");
      login?.classList.add("showed");
      this.isLoginShowed = true;
    }

  }
  public LoginOK(){
    this.toggleLogin()
  }
}
