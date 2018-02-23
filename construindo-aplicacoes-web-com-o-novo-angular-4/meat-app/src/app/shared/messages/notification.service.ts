import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class NotificationService {

  
  notifier = new EventEmitter<String>()
  
  constructor() { }

  
  notify(message: string){
    this.notifier.emit(message)
  }
  
}
