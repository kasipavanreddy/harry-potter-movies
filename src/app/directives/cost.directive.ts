import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[cost]',
  standalone: true,
})
export class CostDirective {
  @Input('cost') totalCost: string = '';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (!this.totalCost) {
      return;
    }

    const formattedTime = `$${this.totalCost} million`;

    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'innerText',
      formattedTime
    );
  }
}
