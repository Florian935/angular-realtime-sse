import { SupplierTransactionEvent } from './model/supplier-transaction-event.model';
import { SupplierTransactionService } from './core/service/http/supplier-transaction.service';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { SmoothieChart, TimeSeries } from 'smoothie';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild('canvas', { static: false }) smoothieChart: ElementRef<HTMLCanvasElement>;
    supplierTransactionEvents: Array<SupplierTransactionEvent>;
    private supplierTransactionSubscriber$: Subscription = new Subscription();
    private timeSeries: TimeSeries;

    public constructor(
        private _supplierTransactionService: SupplierTransactionService) { }

    ngOnInit(): void {
        this.timeSeries = new TimeSeries();
        this.supplierTransactionEvents = new Array();
        this.supplierTransactionSubscriber$ = this._supplierTransactionService
            .getSupplierTransactionEventStream().subscribe(
                (event: SupplierTransactionEvent) => {
                    this.supplierTransactionEvents.push(event);
                    this.timeSeries.append(new Date().getTime(), event.price);
                }
            );
    }

    ngAfterViewInit(): void {
        const chart = new SmoothieChart({ grid: { fillStyle: '#0f2754' }, tooltip: true });
        chart.addTimeSeries(this.timeSeries, { lineWidth: 1, strokeStyle: 'white' });
        chart.streamTo(this.smoothieChart.nativeElement, 500);
    }

    ngOnDestroy(): void {
        this.supplierTransactionSubscriber$.unsubscribe();
    }
}
