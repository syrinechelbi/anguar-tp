import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]',
})
export class RainbowDirective {
  private rainbowColors: string[] = [
    'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'
  ];

  constructor(private el: ElementRef) {}

  @HostBinding('style.color') textColor: string = '';
  @HostBinding('style.border-color') borderColor: string = '';

  @HostListener('keyup') onKeyup(): void {
    this.changeColor();
  }

  private changeColor(): void {
    const randomColor = this.rainbowColors[Math.floor(Math.random() * this.rainbowColors.length)];
    this.textColor = randomColor;
    this.borderColor = randomColor;
  }


}
