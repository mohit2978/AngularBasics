import { ElementRef } from '@angular/core';
import { CustomNgClassDirective } from './custom-ng-class.directive';

describe('CustomNgClassDirective', () => {
  it('should create an instance', () => {
    const directive = new CustomNgClassDirective();
    expect(directive).toBeTruthy();
  });
});
