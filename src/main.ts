import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Adjust the path if needed

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
