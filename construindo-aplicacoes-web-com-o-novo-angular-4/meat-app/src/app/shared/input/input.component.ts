import { Component, OnInit, Input, ContentChild, AfterContentInit} from '@angular/core';
import { NgModel } from '@angular/forms'

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  @ContentChild(NgModel) model: NgModel
  @Input()label: string
  @Input() errorMessage: string
  input: any
  
  
  
  constructor() { }

  ngOnInit() {
  }

  
  ngAfterContentInit(){
    this.input = this.model
    if(this.input === undefined){
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel')
    }
  }
  
  
  hasSuccess(){
    return this.input.valid && (this.input.dirty || this.input.touched)
  }
  
  
  hasError(){
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }
  
  
}
