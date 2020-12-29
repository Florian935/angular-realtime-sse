import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SupplierTransactionService } from '../../core/service/http/supplier-transaction.service';
import { SupplierTransactionEvent } from '../../model/supplier-transaction-event.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit, OnDestroy {

    private supplierTransactionSubscriber$ = new Subscription();
    supplierTransactionEvents: Array<SupplierTransactionEvent>;

    public constructor(private _supplierTransactionService: SupplierTransactionService) { }

    ngOnInit(): void {
        this.supplierTransactionEvents = new Array();
        this.supplierTransactionSubscriber$ = this._supplierTransactionService
            .getSupplierTransactionEventStream().subscribe(
                (event: SupplierTransactionEvent) => this.supplierTransactionEvents.push(event)
            );
    }

    ngOnDestroy(): void {
        this.supplierTransactionSubscriber$.unsubscribe();
    }
}
