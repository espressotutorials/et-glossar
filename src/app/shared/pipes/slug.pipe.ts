import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slug'
})
export class SlugPipe implements PipeTransform {

  transform(str: string): string {

    return isString(str)
      ? str.toLowerCase().trim()
        .replace(/\s+/g, '-') // Replace spaces with
        .replace(/ä/g, 'ae') // Replace & with ‘and’
        .replace(/ü/g, 'ue') // Replace & with ‘and’
        .replace(/ö/g, 'oe') // Replace & with ‘and’
        .replace(/ß/g, 'ss') // Replace & with ‘and’
        .replace(/&/g, '-und-') // Replace & with ‘and’
        .replace(/[^\w\-]+/g, '') // Remove all non-word characters
        .replace(/\-\-+/g, '-') // Replace multiple — with single -
        .replace(/^-+/, '') // Trim — from start of text .replace(/-+$/, '') // Trim — from end of text
      : str;
  }

}

const isString = (value: any) => {
  return typeof value === 'string';
};
