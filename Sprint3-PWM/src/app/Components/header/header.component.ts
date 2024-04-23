import {Component, inject} from '@angular/core';
import {AuthService} from "../../auth.service";
import {NgIf} from "@angular/common";

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

  logout(): void {
    this.authService.logout();
  }
}
