import { Component, Input, OnChanges } from '@angular/core';
import { ITheme } from '../../interfaces';

@Component({
  selector: 'app-theme-item',
  templateUrl: './theme-item.component.html',
  styleUrls: ['./theme-item.component.css']
})

export class ThemeItemComponent implements OnChanges {

  @Input() theme!: ITheme;
  @Input() isLogged!: boolean;

  canSubscribe!: boolean;

  constructor() { }

  ngOnChanges(): void {
    this.canSubscribe = !this.theme.subscribers.includes('5fa64b162183ce1728ff371d');
  }
}
