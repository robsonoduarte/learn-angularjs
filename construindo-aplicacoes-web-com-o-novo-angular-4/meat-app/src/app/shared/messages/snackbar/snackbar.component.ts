import { animate } from '@angular/animations';
import { transition } from '@angular/animations';
import { style } from '@angular/animations';
import { state } from '@angular/animations';
import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        opacity:0,
        bottom: '0px'
      })),
      state('visible', style({
        opacity:1,
        bottom: '30px'        
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out')),
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  
  message = 'Hello There !'
  snackVisibility = 'hidden'
  
  constructor() { }

  ngOnInit() {
  }

  
}
