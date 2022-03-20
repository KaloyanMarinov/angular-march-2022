import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesService } from './services/themes.service';
import { PostsService } from './services/posts.service';
import { ThemeItemComponent } from './components/theme-item/theme-item.component';
import { AsideComponent } from './components/aside/aside.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostsComponent } from './components/posts/posts.component';
import { ThemesComponent } from './components/themes/themes.component';
import { ThemesRoutingModule } from './theme-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NewThemeComponent } from './components/new-theme/new-theme.component';
import { ThemeDetailsComponent } from './components/theme-details/theme-details.component';



@NgModule({
  declarations: [
    ThemesComponent,
    ThemeItemComponent,
    AsideComponent,
    PostsComponent,
    PostItemComponent,
    NewThemeComponent,
    ThemeDetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ThemesRoutingModule
  ],
  providers: [
    ThemesService,
    PostsService
  ],
  exports: []
})
export class ThemesModule { }
