import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitAPIService {

  constructor(private http: HttpClient) { }

  public searchRepositoriesByName(name: string): Observable<Object> {
    const url = this.generateSearchInRepositoriesUrl(name);
    return this.http.get(url);
  }

  private generateSearchInRepositoriesUrl(name: string): string {
    return `https://api.github.com/users/${name}/repos`;
  }
}
