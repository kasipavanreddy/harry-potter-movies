import { ElementRef, Renderer2 } from '@angular/core';
import { ConvertTimeDirective } from './convert-time.directive';
import { TestBed } from '@angular/core/testing';

describe('ConvertTimeDirective', () => {
  let elementRef: ElementRef;
  let renderer2: Renderer2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvertTimeDirective],
    });

    elementRef = new ElementRef(document.createElement('div'));
    renderer2 = jasmine.createSpyObj('Renderer2', ['setProperty']);
  });

  it('should create an instance', () => {
    const directive = new ConvertTimeDirective(elementRef, renderer2);
    expect(directive).toBeTruthy();
  });
});
