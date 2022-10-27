import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private baseURL: string = "https://rickandmortyapi.com/api";

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(`${this.baseURL}/character`)
  }
}
