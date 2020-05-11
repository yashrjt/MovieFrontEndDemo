import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingleSignOnService {

  // constructor() { }
  // private url = 'http://localhost:8080';  
  // private socket;
  
  // sendData(message){
  //   this.socket.emit('Single SignOn', message,this.socket.id);    
  // }
  
  // getData() {
  //   let observable = new Observable(observer => {
  //     this.socket = io(this.url);
  //     this.socket.on('message', (data) => {
  //       observer.next(data);    
  //     });
  //     // return () => {
  //     //   this.socket.disconnect();
  //     // };  
  //   })     
  //   return observable;
  // }  

  // disconnect(){
  //   this.socket.disconnect();
  // }
}
