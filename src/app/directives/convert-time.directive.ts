import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[convertTime]',
  standalone: true,
})
export class ConvertTimeDirective {
  @Input('convertTime') totalMinutes: string = '';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (!this.totalMinutes) {
      return;
    }

    let minutes = parseInt(this.totalMinutes);
    const hours = Math.floor(minutes / 60);
    minutes = minutes % 60;

    const formattedTime = `${hours}h ${minutes}min`;

    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'innerText',
      formattedTime
    );
  }
}
