import { TestBed } from '@angular/core/testing';
import { CostDirective } from './cost.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('CostDirective', () => {
  let elementRef: ElementRef;
  let renderer2: Renderer2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CostDirective],
    });

    elementRef = new ElementRef(document.createElement('div'));
    renderer2 = jasmine.createSpyObj('Renderer2', ['setProperty']);
  });

  it('should create an instance', () => {
    const directive = new CostDirective(elementRef, renderer2);
    expect(directive).toBeTruthy();
  });
});
