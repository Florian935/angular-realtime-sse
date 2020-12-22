import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyCustomPipe } from './pipe/currency-custom.pipe';

const PIPES = [CurrencyCustomPipe];

@NgModule({
  declarations: [PIPES],
  imports: [
    CommonModule
  ],
  exports: [PIPES]
})
export class SharedModule { }
