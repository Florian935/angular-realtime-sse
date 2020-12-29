import { CommonModule } from '@angular/common';
import { SupplierTransactionService } from './service/http/supplier-transaction.service';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [],
  imports: [
      CommonModule
  ],
  exports: [
      CommonModule
  ],
  providers: [
    SupplierTransactionService
  ]
})
export class CoreModule { }
