package com.example.demo;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {

    List<Employee> findAllByFirstNameEquals(String firstName);

    List<Employee> findAllByFirstNameLike(String firstName);
}