import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string ='#FFFFFF';
  private defaultColor: string ='#8b0606';
  private defaultHeight: number = 300;
  private initialScale: number = 1;
  private activeScale: number = 1.08;
  private transition: string = '.5s'

  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
    this.setScale(this.initialScale);
   }

  @Input('pkmnBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
    this.setScale(this.activeScale);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
    this.setScale(this.initialScale);
  }
  
  private setHeight(height: number){
    this.el.nativeElement.style.height = `${height}px`;
  }
  private setBorder(color: string){
    let border = 'solid 4px' + color;
    this.el.nativeElement.style.border = border;
  }
  private setScale(scale: number){
    this.el.nativeElement.style.scale = scale;
    this.el.nativeElement.style.transition = this.transition;
  }

}
