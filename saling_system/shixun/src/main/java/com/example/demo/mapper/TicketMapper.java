package com.example.demo.mapper;

import com.example.demo.domain.Ticket;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;

@Mapper
@Repository
public interface TicketMapper {

    List<String> findArriveStation();

    List<String> findStartStation();

    List<Ticket> findBy4(String start_station,String arrive_station,Date go_date,String type);

    Ticket findById(String ticket_id);

    void update(Ticket ticket);
}
