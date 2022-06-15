import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-without-transition',
  templateUrl: './slide-without-transition.component.html',
  styleUrls: ['./slide-without-transition.component.css']
})
export class SlideWithoutTransitionComponent implements OnInit {

  constructor() { }

  timer: boolean = false;

  ngOnInit(): void {

    let time = setInterval(() => {
      this.timer = !this.timer;

    }, 3000);
  }

}
