import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyCustomPipe } from './pipe/currency-custom.pipe';
import { StreamComponent } from './component/stream.component';

const PIPES = [CurrencyCustomPipe];

@NgModule({
    declarations: [
        PIPES,
        StreamComponent
    ],
    imports: [
    ],
    exports: [
        PIPES,
        StreamComponent
    ]
})
export class SharedModule { }
