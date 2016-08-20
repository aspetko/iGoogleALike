/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { LatexComponent } from './latex.component';

describe('Component: Latex', () => {
  it('should create an instance', () => {
    let component = new LatexComponent();
    expect(component).toBeTruthy();
  });
});
