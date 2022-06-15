import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [

  ]
})
export class AppComponent implements OnInit {
  title = 'banner-practice';
  imageSelector: number = 0;

  imagesObject: any = {}
  array: any[] = [];

  // image1: string = 'assets/images/image1.jpg';
  // img1: string = 'pos-start';
  // image2: string = 'assets/images/image2.jpg';
  // img2: string = 'pos-second';
  // image3: string = 'assets/images/image3.jpg';
  // img3: string = 'pos-third';
  // image4: string = 'assets/images/image4.jpg';
  // img4: string = 'pos-fourth';

  currentPosition: number = 0;
  newPosition: number = 0;

  class: string = '';


  ngOnInit(): void{

    // console.log(this.position[0]);

    // Pegar as Imagens
    
    for (let index = 1; index <= 4; index++) {

      // let im = index + 1;
      
      // if(index == 1){
      //   this.class = "first-img";
      // }else if(index == 2){
      //   this.class = "second-img";
      // }else if(index == 3){
      //   this.class = "third-img";
      // }else if(index == 4){
      //   this.class = "fourth-img";
      // }

      this.imagesObject = {
        position_class: index,
        image: `<img class='pos${index}' src='assets/images/image${index}.jpg'>`,
        class: this.class,
      };

      this.array.push(this.imagesObject);
      // this.array[index] = this.imagesObject;

    }

    
    // console.log(this.array);

    let timer = setInterval(() => {

      this.array.forEach((data) => {
        // console.log(`${data.position_class} => ${data.image}`);
        
        // console.log(`${data.position_class} => ${data.image}`);

        
        data.position_class ++;

        if(data.position_class == 5){
          data.position_class = 1;
        }

        // this.imagesObject = {
        //   position_class: data.position_class,
        //   image: data.image,
        //   div_position: data.div_position
        // }

        // this.array = [];

        // this.array.push(this.imagesObject);
        
      });

      console.log(this.array);

      
      this.array = this.array.sort((a, b) => {
        return a.position_class - b.position_class
      });

      // this.array.forEach((data2) => {
      //   if(data2.position_class == 1){
      //     this.class = "first-img";
      //   }else if(data2.position_class == 2){
      //     this.class = "second-img";
      //   }else if(data2.position_class == 3){
      //     this.class = "third-img";
      //   }else if(data2.position_class == 4){
      //     this.class = "fourth-img";
      //   }
      // });

      // clearInterval(timer);

    }, 4000);


    // console.log(this.array);

    // Jogar com as suas posições

    // let timer = setInterval(() => {

    //   this.img1 = "pos-second";
    //   this.img2 = "pos-second";

    // }, 4000);
  }
  
}