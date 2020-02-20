package com.example.demo.mapper;

import com.example.demo.domain.Orders;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface OrdersMapper {

    List<Orders> findByClient_id(long client_id);

    void save(Orders orders);

    void delete(String order_number);

    String findTicketIdByOrderNumber(String order_number);

}
