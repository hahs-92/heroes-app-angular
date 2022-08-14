import { Pipe, PipeTransform } from '@angular/core';
//interfaces
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  transform(heroe: Heroe): string {
    if (!heroe.id) {
      return 'assets/no-image.png';
    }

    if (heroe.alt_img) {
      return heroe.alt_img;
    }

    return `assets/heroes/${heroe.id}.jpg`;
  }
}
