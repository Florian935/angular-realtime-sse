import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './transaction.component';


@NgModule({
    declarations: [
        TransactionComponent
    ],
    imports: [
        CommonModule,
        TransactionRoutingModule,
        SharedModule
    ]
})
export class TransactionModule { }
