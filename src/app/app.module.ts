import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule  // <-- Still import FormsModule here if you're using forms in other parts of the app
  ],
  providers: [],
})
export class AppModule { }
