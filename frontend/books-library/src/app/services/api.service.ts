import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private baseUrl: string = 'http://localhost:5555'
  constructor() { }
}
