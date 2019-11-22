import { Component, Input } from '@angular/core';

@Component({
  selector: 'fisrt-page',
  template: `<h1>FirstPage {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class FirstPageComponent  {
  @Input() name: string;
}