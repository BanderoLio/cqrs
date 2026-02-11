import { Controller, Post } from '@nestjs/common';
import type { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
  @Post()
  create() {
    return this.ordersService.create();
  }
}
