import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { UserService } from './user.service';
import { ThemeItemComponent } from './theme-item/theme-item.component';
import { ThemesComponent } from './themes/themes.component';
import { ThemesService } from './themes.service';
import { PostsComponent } from './posts/posts.component';
import { PostItemComponent } from './post-item/post-item.component';
import { PostsService } from './posts.service';
import { storageServiceProvider } from './storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ThemesComponent,
    ThemeItemComponent,
    AsideComponent,
    PostsComponent,
    PostItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    storageServiceProvider,
    UserService,
    ThemesService,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
