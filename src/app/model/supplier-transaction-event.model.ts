export class SupplierTransactionEvent {

    public constructor(
        public supplierCounter: number,
        public username: string,
        public price: number,
        public instant: Date
    ) { }
}
