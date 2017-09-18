package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Admin on 18/9/2560.
 */

@RestController
public class RestAPIController {

    private EmployeeRepository repository;

    @Autowired
    public void employeeRepository(EmployeeRepository repository) {
        this.repository = repository;
    }

    @RequestMapping("/employee/{firstName}")
    public List<Employee> getEmployeeByFirstNameLike(@PathVariable(name = "firstName") String firstName){
        List<Employee> list = this.repository.findAllByFirstNameLike(firstName);
        return list;
    }
}
