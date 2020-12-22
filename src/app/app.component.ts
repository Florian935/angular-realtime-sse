import { SupplierTransactionEvent } from './model/supplier-transaction-event.model';
import { SupplierTransactionService } from './core/service/http/supplier-transaction.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

    supplierTransactionEvents: Array<SupplierTransactionEvent>;

    supplierTransactionSubscriber$: Subscription = new Subscription();

    public constructor(
        private _supplierTransactionService: SupplierTransactionService) { }

    ngOnInit(): void {
        this.supplierTransactionEvents = new Array();
        this.supplierTransactionSubscriber$ = this._supplierTransactionService
            .getSupplierTransactionEventStream().subscribe(
                (event: SupplierTransactionEvent) => {
                    this.supplierTransactionEvents.push(event);
                }
            );
    }

    ngOnDestroy(): void {
        this.supplierTransactionSubscriber$.unsubscribe();
    }
}
