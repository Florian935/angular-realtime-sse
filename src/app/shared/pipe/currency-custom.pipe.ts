import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'currencyCustom'
})
export class CurrencyCustomPipe implements PipeTransform {

    public transform(price: number, symbol: string): string {
        return `${price}${symbol}`;
    }
}
