import { SupplierTransactionEvent } from './../../../model/supplier-transaction-event.model';
import { environment } from '../../../../environments/environment';
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SupplierTransactionService {

    baseUrl = environment.baseUrl;

    constructor(private _zone: NgZone) { }

    public getSupplierTransactionEventStream(): Observable<SupplierTransactionEvent> {
        return new Observable(
            observer => {
                const eventSource = new EventSource(
                    `${this.baseUrl}/transaction/supplier/event/SSE`
                );

                eventSource.onmessage = event => {
                    this._zone.run(() => {
                        observer.next(JSON.parse(event.data));
                    });
                };

                eventSource.onerror = event => {
                    this._zone.run(() => {
                        observer.error(event);
                    });
                };

            }
        );
    }
}
