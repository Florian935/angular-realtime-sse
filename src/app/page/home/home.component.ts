import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SupplierTransactionService } from '../../core/service/http/supplier-transaction.service';
import { SupplierTransactionEvent } from '../../model/supplier-transaction-event.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public constructor() { }

    ngOnInit(): void { }
}
