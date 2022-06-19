import { OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';

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

  numberOfImages: number = 5;
  imageObject: any = {};
  arrayOfImages: any[] = [];

  image1: string = `<img src="assets/images/image1.jpg" alt="">`;
  image2: string = `<img src="assets/images/image2.jpg" alt="">`;
  image3: string = `<img src="assets/images/image3.jpg" alt="">`;
  image4: string = `<img src="assets/images/image4.jpg" alt="">`;
  image5: string = `<img src="assets/images/image5.jpg" alt="">`;
  
  isFirst: boolean = false;

  getImageFirst(){
    return this.image1;
  }
  getImageSecond(){
    return this.image2;
  }
  getImageThird(){
    return this.image3;
  }
  getImageFourth(){
    return this.image4;
  }
  getImageFifth(){
    return this.image5;
  }

  ngOnInit(): void{

    for (let index = 1; index <= this.numberOfImages; index++) {
      let imageVal;
      let position;

      switch(index){
        case 1:
          imageVal = this.getImageFirst();
          position = index; 
          this.isFirst = true;
          break;
        case 2:
          imageVal = this.getImageSecond();
          position = index;
          this.isFirst = false;
          break;
        case 3:
          imageVal = this.getImageThird();
          position = index;
          this.isFirst = false;
          break;
        case 4:
          imageVal = this.getImageFourth();
          position = index;
          this.isFirst = false;
          break;
        case 5:
          imageVal = this.getImageFifth();
          position = index;
          this.isFirst = false;
          break;
        default:
          break;
      }

      this.imageObject = {
        image: imageVal,
        position: position,
        // isFirst: this.isFirst
      };
      this.arrayOfImages.push(this.imageObject);

      // this.arrayOfImages[0] = 

    }

    // console.log(this.arrayOfImages);


    if(this.numberOfImages > 1){
      // Espera 6 segundos antes do Slider comçar a rodar.
      let waitFiveSecondsToStart = setInterval(() => {

        let interval = setInterval(() => {

          // console.log(this.arrayOfImages);
          this.arrayOfImages.forEach((data) => {
    
            data.position ++;
    
            if(data.position === this.numberOfImages + 1){
    
              data.position = 1;
    
            }
    
          });
    
          this.arrayOfImages.sort((a, b) => {
    
            return a.position - b.position;
    
          });
    
        }, 4500);

        clearInterval(waitFiveSecondsToStart);

      }, 5000);
    }

  }

  next(): void{

    
    clearInterval();

    this.arrayOfImages.forEach((data) => {
    
      data.position ++;

      if(data.position === this.numberOfImages + 1){
        data.position = 1;
      }

    });

    this.arrayOfImages.sort((a, b) => {
      return a.position - b.position;
    });


  }

  prev(): void{}
  
}