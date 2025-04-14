import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { UserApiService } from '../../services/userApi.service';

@Component({
  selector: 'app-login-page',
  imports: [
    RouterLink
  ],
  templateUrl: './login-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  email = signal<string>('');
  password = signal<string>('');
  router = inject(Router);
  userService = inject(UserApiService);//aqui se realizo la inyeccion  del servicio, esto incluye los datos y las funciones

  constructor() {
    effect(() => {
      const token = this.userService.dataAuth().token;
      if (token.length > 0) {
        console.log('Token recibido, navegando...');
        this.router.navigate(['/dashboard']);
      }
    });
  }

  public login(event: Event) {
    event.preventDefault();
    const user = {
      email: this.email(),
      password: this.password()
    }
    this.userService.login(user);
  }
}
