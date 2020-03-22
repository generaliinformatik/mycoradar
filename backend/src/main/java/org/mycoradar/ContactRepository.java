package org.mycoradar;

import org.springframework.data.repository.CrudRepository;
//JPA
//import org.springframework.data.jpa.repository.JpaRepository
//extends JpaRepository

import org.mycoradar.Contact;

// This will be AUTO IMPLEMENTED by Spring into a Bean called ContactRepository
// CRUD refers Create, Read, Update, Delete

public interface ContactRepository extends CrudRepository<Contact, Integer> {

}