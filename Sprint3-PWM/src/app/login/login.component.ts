import {Component, inject, Output} from '@angular/core';
import {FormBuilder, FormsModule, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import { Router } from '@angular/router';
import { HeaderComponent } from "../Components/header/header.component";
import EventEmitter from "node:events";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService)
  email: string = "";
  password: string = "";

  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private router: Router) {
  }
  onSubmit(): void{
    this.authService.login(this.email, this.password).subscribe({
      next:()=>{
        let returnUrl = localStorage.getItem('returnUrl');
        this.router.navigateByUrl(returnUrl ? returnUrl : '/');
        localStorage.removeItem('returnUrl');

        let login = document.querySelector(".flotante.login");

        login?.classList.remove("showed");
        login?.classList.add("oculto");

      },
      error: (err) => {
        console.log(err.code);
      }
    })
  }

}
