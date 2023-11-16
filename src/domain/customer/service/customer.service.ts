import { v4 as uuid } from 'uuid';
import CustomerRepository from "../../../infrastructure/customer/repository/sequelize/customer.repository";
import { Mediator } from "../../@shared/service/mediator";
import Customer from "../entity/customer";


export class CustomerService{

    constructor(
        private customerRepo: CustomerRepository, 
        private mediator: Mediator
        ){}

    async create(name: string){
        const customer = Customer.create(uuid(), name);
        
        await this.customerRepo.create(customer);
        await this.mediator.publish(customer); 
        
        return customer;
    }
}
