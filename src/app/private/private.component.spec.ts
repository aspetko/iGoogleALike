/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { PrivateComponent } from './private.component';

describe('Component: Private', () => {
  it('should create an instance', () => {
    let component = new PrivateComponent();
    expect(component).toBeTruthy();
  });
});
