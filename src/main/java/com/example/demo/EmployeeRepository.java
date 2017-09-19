package com.example.demo;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

// class นี้ extends CrudRepository ที่จะใช้เพื่อดึงข้อมูล Employee และ id ของ Employee มี type เป็น Long
// จึงใช้ CrudRepository<Employee, Long>
public interface EmployeeRepository extends CrudRepository<Employee, Long> {

    // repo เป็นสิ่งที่มีคนเขียนมาให้เราแล้ว เรียกว่า framework หรือ library
    // ปกติจะมี method save() findAll() count() อื่น ๆ ไปดูที่ 
    // https://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/repository/CrudRepository.html


    // method findAll() คือการ SELECT * FROM Employee
    // แล้ว return ข้อมูลทุกอย่างที่ได้เป็น List ของ Employee
    List<Employee> findAll();

    // ถ้าเขียน method ขึ้นมาเอง การตั้งชื่อ method ก็เป็นการกำหนดลอจิกในการดึงข้อมูลจาก Database เช่น
    // methos นี้เป็นการ SELECT * FROM Employee WHERE first_name = <firstName ค่าที่รับมา>
    // ดึงข้อมูล Employee ทั้งหมดที่มี firstName เท่ากับ String ที่ส่งมา (String firstName)
    List<Employee> findAllByFirstNameEquals(String firstName);
}