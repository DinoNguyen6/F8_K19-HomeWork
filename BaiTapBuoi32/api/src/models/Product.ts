import { v7 as uuidv7} from 'uuid';

export class Product {
    private id: string = uuidv7();

    constructor(private _name: string, private _price: number, private _stock: number) {}
}