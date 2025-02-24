import { Component } from '@angular/core';
import { ComponentsComponent } from 'components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ComponentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
