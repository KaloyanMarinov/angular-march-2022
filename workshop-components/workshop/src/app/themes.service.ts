import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { ITheme } from './interfaces';

const apiUrl = environment.apiUrl;

@Injectable()
export class ThemesService {

  constructor(private http: HttpClient) { }

  getThemesList(): Observable<ITheme[]> {
    return this.http.get<ITheme[]>(`${apiUrl}/themes`);
  }
}
