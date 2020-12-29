import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SupplierTransactionService } from '../core/service/http/supplier-transaction.service';
import { SupplierTransactionEvent } from '../model/supplier-transaction-event.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    supplierTransactionEvents: Array<SupplierTransactionEvent>;
    private supplierTransactionSubscriber$ = new Subscription();

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
