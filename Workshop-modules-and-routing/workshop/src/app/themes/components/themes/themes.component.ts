import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/auth/services/user.service';
import { ITheme } from '../../interfaces';
import { ThemesService } from '../../services/themes.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {

  themesList!: ITheme[];

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  constructor(
    private themesService: ThemesService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.themesService.getThemesList().subscribe(themesList => {
      this.themesList = themesList;
    })
  }
}
