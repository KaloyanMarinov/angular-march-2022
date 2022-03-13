import { Component, OnInit } from '@angular/core';
import { ITheme } from '../interfaces';
import { ThemesService } from '../themes.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {

  themesList!: ITheme[];

  constructor(private themesService: ThemesService) { }

  ngOnInit(): void {
    this.themesService.getThemesList().subscribe(themesList => {
      this.themesList = themesList;
    })
  }
}
