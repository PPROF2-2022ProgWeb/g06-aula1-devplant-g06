import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  public registrarUsuario(user:any){
    //hacer peticion post
    return this.httpClient.post(`${baserUrl}/usuarios/`, user);
  }

}
