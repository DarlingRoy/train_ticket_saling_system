package com.example.demo.domain;

import java.io.Serializable;
import java.sql.Timestamp;

public class Orders implements Serializable {

    private static final long serialVersionUID = 1L;
    private String order_number;
    private String ticket_id;
    private Timestamp order_time;
    private Timestamp go_date;
    private long client_id;

    @Override
    public String toString() {
        return "Orders{" +
                "order_number='" + order_number + '\'' +
                ", ticket_id='" + ticket_id + '\'' +
                ", order_time=" + order_time +
                ", go_date=" + go_date +
                ", client_id=" + client_id +
                '}';
    }

    public String getOrder_number() {
        return order_number;
    }

    public void setOrder_number(String order_number) {
        this.order_number = order_number;
    }

    public String getTicket_id() {
        return ticket_id;
    }

    public void setTicket_id(String ticket_id) {
        this.ticket_id = ticket_id;
    }

    public Timestamp getOrder_time() {
        return order_time;
    }

    public void setOrder_time(Timestamp order_time) {
        this.order_time = order_time;
    }

    public Timestamp getGo_date() {
        return go_date;
    }

    public void setGo_date(Timestamp go_date) {
        this.go_date = go_date;
    }

    public long getClient_id() {
        return client_id;
    }

    public void setClient_id(long client_id) {
        this.client_id = client_id;
    }
}
