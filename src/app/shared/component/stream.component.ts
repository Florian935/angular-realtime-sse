import { Subscription } from 'rxjs';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { IChartOptions, ITimeSeriesPresentationOptions, SmoothieChart, TimeSeries } from 'smoothie';
import { SupplierTransactionService } from 'src/app/core/service/http/supplier-transaction.service';
import { SupplierTransactionEvent } from 'src/app/model/supplier-transaction-event.model';

const CHART_OPTIONS: IChartOptions = {
    grid: {
        fillStyle: '#0f2754'
    },
    tooltip: true
};

const TIMESERIES_OPTIONS: ITimeSeriesPresentationOptions = {
    lineWidth: 1,
    strokeStyle: 'white'
};

@Component({
    selector: 'app-stream',
    templateUrl: './stream.component.html',
    styleUrls: ['./stream.component.scss']
})
export class StreamComponent implements OnInit, AfterViewInit, OnDestroy {

    @Input() width: number;
    @Input() height: number;
    @ViewChild('canvas', { static: false }) smoothieChart: ElementRef<HTMLCanvasElement>;
    private timeSeries = new TimeSeries();
    private streamSubscriber$ = new Subscription();

    constructor(private _supplierTransactionService: SupplierTransactionService) { }

    ngOnInit(): void {
        this.subscribeToEvent();
    }

    private subscribeToEvent(): void {
        this.streamSubscriber$ = this._supplierTransactionService
            .getSupplierTransactionEventStream()
            .subscribe(
                (event: SupplierTransactionEvent) =>
                    this.appendValueToTimeSeries(event.price)
            );
    }

    private appendValueToTimeSeries(price: number): void {
        this.timeSeries.append(new Date().getTime(), price);
    }

    ngAfterViewInit(): void {
        this.createSmoothieChart();
    }

    private createSmoothieChart(): void {
        const chart = new SmoothieChart(CHART_OPTIONS);
        this.streamToCanvasElement(chart);
    }

    private streamToCanvasElement(chart: SmoothieChart): void {
        chart.addTimeSeries(this.timeSeries, TIMESERIES_OPTIONS);
        chart.streamTo(this.smoothieChart.nativeElement, 500);
    }

    ngOnDestroy(): void {
        this.streamSubscriber$.unsubscribe();
    }
}
