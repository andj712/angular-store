import { RedElDirective } from './red-el.directive';
import { ElementRef } from '@angular/core';

describe('RedElDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = {
      nativeElement: document.createElement('div')
    } as ElementRef;

    const directive = new RedElDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
