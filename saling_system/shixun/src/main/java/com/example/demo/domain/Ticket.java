package com.example.demo.domain;

import java.io.Serializable;
import java.sql.Date;
import java.sql.Time;
import java.sql.Timestamp;

public class Ticket implements Serializable {

    private static final long serialVersionUID = 1L;
    private String ticket_id;
    private String train_number;
    private String start_station;
    private String arrive_station;
    private String seat_type;
    private String price;
    private Date go_date;
    private Time go_time;
    private Timestamp arrive_time;
    private String type;
    private Integer remain;

    @Override
    public String toString() {
        return "Ticket{" +
                "ticket_id='" + ticket_id + '\'' +
                ", train_number='" + train_number + '\'' +
                ", start_station='" + start_station + '\'' +
                ", arrive_station='" + arrive_station + '\'' +
                ", seat_type='" + seat_type + '\'' +
                ", price='" + price + '\'' +
                ", go_date=" + go_date +
                ", go_time=" + go_time +
                ", arrive_time=" + arrive_time +
                ", type='" + type + '\'' +
                ", remain=" + remain +
                '}';
    }

    public String getTicket_id() {
        return ticket_id;
    }

    public void setTicket_id(String ticket_id) {
        this.ticket_id = ticket_id;
    }

    public String getTrain_number() {
        return train_number;
    }

    public void setTrain_number(String train_number) {
        this.train_number = train_number;
    }

    public String getStart_station() {
        return start_station;
    }

    public void setStart_station(String start_station) {
        this.start_station = start_station;
    }

    public String getArrive_station() {
        return arrive_station;
    }

    public void setArrive_station(String arrive_station) {
        this.arrive_station = arrive_station;
    }

    public String getSeat_type() {
        return seat_type;
    }

    public void setSeat_type(String seat_type) {
        this.seat_type = seat_type;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public Date getGo_date() {
        return go_date;
    }

    public void setGo_date(Date go_date) {
        this.go_date = go_date;
    }

    public Time getGo_time() {
        return go_time;
    }

    public void setGo_time(Time go_time) {
        this.go_time = go_time;
    }

    public Timestamp getArrive_time() {
        return arrive_time;
    }

    public void setArrive_time(Timestamp arrive_time) {
        this.arrive_time = arrive_time;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getRemain() {
        return remain;
    }

    public void setRemain(Integer remain) {
        this.remain = remain;
    }
}
