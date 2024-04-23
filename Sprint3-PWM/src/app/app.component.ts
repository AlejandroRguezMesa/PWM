import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./Components/header/header.component";
import {FooterComponent} from "./Components/footer/footer.component";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sprint3-PWM';
  authService = inject(AuthService)
  http = inject(HttpClient);
  ngOnInit(): void{
    this.authService.user$.subscribe((user) => {
      if (user) {
        this.authService.currentUserSig.set({
          email: user.email!,
          username: user.displayName!,
        });
      } else {
        this.authService.currentUserSig.set(null);
      }
      console.log(this.authService.currentUserSig());
    });
  }
  logout(): void {
    this.authService.logout();
  }
}
