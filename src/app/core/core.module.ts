import { CommonModule } from '@angular/common';
import { SupplierTransactionService } from './service/http/supplier-transaction.service';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        RouterModule,
        CommonModule
    ],
    exports: [
        CommonModule,
        HeaderComponent,
        FooterComponent
    ],
    providers: [
        SupplierTransactionService
    ]
})
export class CoreModule { }
