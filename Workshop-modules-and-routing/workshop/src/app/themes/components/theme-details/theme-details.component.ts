import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/auth/services/user.service';
import { IPost, ITheme } from '../../interfaces';
import { ThemesService } from '../../services/themes.service';

@Component({
  selector: 'app-theme-details',
  templateUrl: './theme-details.component.html',
  styleUrls: ['./theme-details.component.css']
})
export class ThemeDetailsComponent implements OnInit {

  theme!: ITheme<IPost>;
  canSubscribe!: boolean;

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  constructor(
    private activedRoute: ActivatedRoute,
    private userService: UserService,
    private themeService: ThemesService
  ) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      const themeId = params['themeId'];
      this.themeService.getThemeById(themeId).subscribe(theme => {
        this.theme = theme;
        this.canSubscribe = !this.theme.subscribers.includes('5fa64b162183ce1728ff371d');
      });
    })
  }

  canLike(comment: IPost) {
    return !comment.likes.includes('5fa64b162183ce1728ff371d');
  }
}
