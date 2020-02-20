package com.example.demo.mapper;

import com.example.demo.domain.Client;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface ClientMapper {

    List<Client> findAll();

    Client findById(long id);

    void update(Client client);

    void save(Client client);

}
