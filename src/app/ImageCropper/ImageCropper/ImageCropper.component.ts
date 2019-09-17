import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'anglo-image-cropper',
  templateUrl: './ImageCropper.component.html',
  styleUrls: ['./ImageCropper.component.scss']
})

export class ImageCropperComponent implements OnInit {

   image             : any = '';
   imageChangedEvent : any = '';
   croppedImage      : any = '';

   constructor() { }

	ngOnInit() {
   }
   
   /**
     * fileChangeEvent is used to changes the image.
     */
   fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
   }

   /**
     * imageCropped is used to crop the image.
     */
   imageCropped(image: string) {
      this.croppedImage = image;
   }

   /**
     * onGenerate is used to generate the crop image.
     */
   onGenerate(){
      this.image = this.croppedImage;
   }
   
}
