import {v7} from 'uuid';

class Customer {
    private id: string
    private name: string

    constructor(name: string) {
        this.id = v7();
        this.name = name;
    }
}

class CustomerService {
    private customers: Customer[] = []

    add(customer: Customer) {
        this.customers.push(customer)
    }

    getCustomers() {
        return this.customers;
    }
    sendNoti() {
        for (const cst of this.customers) {
            console.log(cst.getName(), 'nhan duoc thong bao')
        }

    }
}

