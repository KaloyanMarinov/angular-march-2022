import { Component, Input } from '@angular/core';
import { ITheme } from '../interfaces';

@Component({
  selector: 'app-theme-item',
  templateUrl: './theme-item.component.html',
  styleUrls: ['./theme-item.component.css']
})
export class ThemeItemComponent {

  @Input() theme!: ITheme;

  constructor() { }
}
