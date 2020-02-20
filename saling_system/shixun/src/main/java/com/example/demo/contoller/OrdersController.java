package com.example.demo.contoller;

import com.example.demo.domain.Orders;
import com.example.demo.domain.Ticket;
import com.example.demo.mapper.OrdersMapper;
import com.example.demo.mapper.TicketMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrdersController {

    @Autowired
    private OrdersMapper ordersMapper;

    @Autowired
    private TicketMapper ticketMapper;

    @RequestMapping("/findByClient_id")
    public List<Orders> findByClient_id(long client_id){
        return ordersMapper.findByClient_id(client_id);
    }

    @RequestMapping("/save")
    public void save(Orders orders){
        Ticket ticket = ticketMapper.findById(orders.getTicket_id());
        ticket.setRemain(ticket.getRemain()-1);
        ticketMapper.update(ticket);
        ordersMapper.save(orders);
    }

    @RequestMapping("/delete")
    public void delete(String order_number){
        String ticket_id = ordersMapper.findTicketIdByOrderNumber(order_number);
        Ticket ticket = ticketMapper.findById(ticket_id);
        ticket.setRemain(ticket.getRemain()+1);
        ticketMapper.update(ticket);
        ordersMapper.delete(order_number);
    }

}
