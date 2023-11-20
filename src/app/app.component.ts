import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, CardListComponent, FormComponent } from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CardListComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular CRUD';
}
