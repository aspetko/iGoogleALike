/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { QuotesComponent } from './quotes.component';

describe('Component: Quotes', () => {
  it('should create an instance', () => {
    let component = new QuotesComponent();
    expect(component).toBeTruthy();
  });
});
