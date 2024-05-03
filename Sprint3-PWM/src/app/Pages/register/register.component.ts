import { HttpClient } from '@angular/common/http';
import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from "../../auth.service";
import {doc, Firestore, setDoc} from "@angular/fire/firestore";
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService = inject(AuthService)
  rol: string = 'users';
  @ViewChild('EmailInput', { static: true }) EmailInput!: ElementRef;
  @ViewChild('UsernameInput', { static: true }) UsernameInput!: ElementRef;
  @ViewChild('preferenciasInput', { static: true }) preferenciasInput!: ElementRef;
  @ViewChild('historialInput', { static: true }) historialInput!: ElementRef;
  @ViewChild('apellidoInput', { static: true }) apellidoInput!: ElementRef;

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  errorMessage: string | null = null;
  constructor(private firestore: Firestore, private router: Router) {
  }
  nutricionista(){
    this.rol = 'nutritionist'
  }
  cliente(){
    this.rol = 'users'
  }
  onSubmit(): void {

    const rawForm = this.form.getRawValue()
    this.authService.register(rawForm.email, rawForm.username, rawForm.password).subscribe({
      next:()=>{
        this.guardarUser();
        let returnUrl = localStorage.getItem('returnUrl');
        this.router.navigateByUrl(returnUrl ? returnUrl : '/');
        localStorage.removeItem('returnUrl');
      },
      error: (err) => {
        this.errorMessage = err.code;
      }
    })
  }
  cargarPagina(url: string) {
    this.router.navigate([url]);
    localStorage.setItem('returnUrl', this.router.url);

  }
  async guardarUser() {
    let year = new Date().getFullYear();

    const valorEmail = this.EmailInput.nativeElement.value;
    const valorUsername = this.UsernameInput.nativeElement.value;
    const valorApellido = this.apellidoInput.nativeElement.value;
    const valorPreferencias = this.preferenciasInput.nativeElement.value;
    const valorHistorial = this.historialInput.nativeElement.value;
    const uid: string | undefined = this.authService.currentUserSig()?.uid;
    if (
      !valorApellido ||
      !valorPreferencias ||
      !valorHistorial
    ) {
      alert('campos vacios');
      return;
    }
    else {
      if (typeof uid === "string") {
        await setDoc(doc(this.firestore, this.rol, uid), {
          email: valorEmail,
          username: valorUsername,
          apellido: valorApellido,
          historial_medico: valorHistorial,
          preferencias: valorPreferencias,
        });
      }
    }


  }

}
