import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [FormsModule] 
})
export class AppComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;
  title = 'webapp';

  onSubmit() {
    // Simple hardcoded check for demonstration purposes
    if (this.username === 'admin' && this.password === 'password') {
      alert('Login successful!');
      this.loginError = false;
    } else {
      this.loginError = true;
    }
  }
}
