package com.example.demo.contoller;

import com.example.demo.domain.Client;
import com.example.demo.mapper.ClientMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/client")
public class ClientController {

    @Autowired
    private ClientMapper clientMapper;

    @RequestMapping("/findAll")
    public List<Client> findAll(){
        return clientMapper.findAll();
    }

    @RequestMapping("/findById")
    public Client findById(long id){
        return clientMapper.findById(id);
    }

    @RequestMapping("/update")
    public void update(Client client){
        clientMapper.update(client);
    }

    @RequestMapping("/save")
    public void save(Client client){
        clientMapper.save(client);
    }
}
