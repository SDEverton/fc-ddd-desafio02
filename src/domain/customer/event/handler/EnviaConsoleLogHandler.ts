import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import UpdateCustomerAddressEvent from "../update-customer-address.event";

export default class EnviaConsoleLogHandler
  implements EventHandlerInterface<UpdateCustomerAddressEvent>
{
  handle(event: UpdateCustomerAddressEvent): void {
    console.log(`Endereço do cliente: ${event.eventData.id}, ${event.eventData.name} alterado para: ${event.eventData.address.street}, ${event.eventData.address.number}, ${event.eventData.address.city}, ${event.eventData.address.zip}`); 
  }
}
