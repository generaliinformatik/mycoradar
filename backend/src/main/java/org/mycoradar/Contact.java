package org.mycoradar;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String device_id;

    private Timestamp date_positive;

    public Contact(){
    }

    public Contact(String device_id, Timestamp date_positive){
        this.device_id = device_id;
        this.date_positive = date_positive;
    }

    public String getDevice_id() {
        return device_id;
    }

    public void setDevice_id(String device_id) {
        this.device_id = device_id;
    }

    public Timestamp getDate_positive() {
        return date_positive;
    }

    public void setDate_positive(Timestamp date_positive) {
        this.date_positive = date_positive;
    }
}