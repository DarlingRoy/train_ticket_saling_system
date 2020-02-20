package com.example.demo.contoller;

import com.example.demo.domain.Ticket;
import com.example.demo.mapper.TicketMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Date;
import java.util.List;

@RestController
@RequestMapping("/ticket")
public class TicketController {

    @Autowired
    private TicketMapper ticketMapper;

    @RequestMapping("/findStartStation")
    public List<String> findStartStation(){
        return ticketMapper.findStartStation();
    }

    @RequestMapping("/findArriveStation")
    public List<String> findArriveStation(){
        return ticketMapper.findArriveStation();
    }

    @RequestMapping("/findBy4")
    public List<Ticket> findBy4(String start_station, String arrive_station, Date go_date, String type){
        return ticketMapper.findBy4(start_station,arrive_station,go_date,type);
    }

    @RequestMapping("/findById")
    public Ticket findById(String ticket_id){
        return ticketMapper.findById(ticket_id);
    }

    @RequestMapping("/update")
    public void update(Ticket ticket){
        ticketMapper.update(ticket);
    }
}
