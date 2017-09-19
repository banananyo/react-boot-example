package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by wadjakorn on 18/9/2560.
 */
// class นี้คือ ที่อยู่ของ API
// @RestController คือการประกาศว่า class นี้จะเป็น API (RestFull Service)
@RestController
public class RestAPIController {

    // ส่วนนี้คือ repo 
    // อธิบายง่าย ๆ คือมันจะสามารถดึงข้อมูลจาก ฐานข้อมูลออกมาเป็น java object ได้
    private EmployeeRepository repository;

    // การ @Autowired คือการทำ dependency injection
    // อธิบายง่าย ๆ คือ มันจะไป new EmployeeRepository() ให้เราเอง แล้วส่งมาเข้าใน method นี้ให้เราเอง
    // ทำไมต้องทำแบบนี้ ... เพราะว่าถ้าหากเรา new เอง มันอาจจะเกิดการซ้ำซ้อน (new หลายครั้ง)
    // จากนั้นก็ทำเหมือน setter เลยคือ ให้ this.repository = repository ที่ถูกส่งมา
    @Autowired
    public void employeeRepository(EmployeeRepository repository) {
        this.repository = repository;
    }

    // @RequestMapping คือ การบอกว่า method นี้เป็น API สามารถเรียกใช้ได้
    // ถ้าพิมพ์ http://localhost:8080/employee/list บน browser ขณะรันโปรแกรมนี้ จะได้ข้อมูล employe ทั้งหมดที่มีในฐานข้อมูล เป็นรูปแบบ json string
    // ถามว่าข้อมูลมาจากไหน ไปดูใน /java/example/demo/DatabaseLoader.java
    // method นี้ return เป็นรูปแบบ List ที่ในลิสต์เนี่ย จะต้องเป็น Employee นะ ถึงจะใส่เข้าไปใน List ได้
    // โดย ข้อมูลใน list จะได้จากการเรียก this.repository.findAll();
    // มันคือ JPA repository (เป็น framework ที่ออกแบบมาเพื่อไม่ให้เราเขียนโค้ดเยอะ ในการจัดการ Database ซึ่งเมื่อก่อนเขียนโคตรเยอะกว่าจะได้ขนาดนี้)
    // อยากรู้เป็นไง ตามไปดู /java/example/demo/EmployeeRepository.java
    @RequestMapping("/employee/list")
    public List<Employee> getEmployeeList(){
        List<Employee> list = this.repository.findAll();
        return list;
    }

    // run โปรแกรม แล้วไปที่ browser
    // ลองพิมพ์ http://localhost:8080/employee/Frodo
    // ลองพิมพ์ http://localhost:8080/employee/John
    // ลังเกตูผลลัพธ์
    // ก็คือ API นี้ มี url คือ /employee/ ตามด้วย ค่าที่ส่งเป็นพารามิเตอร์ใน method นี้

    // สมมุติใส่ http://localhost:8080/employee/Frodo
    // คำว่า Fordo ก็จะถูกกำหนดให้พารามิเตอร์ที่มีชื่อว่า  {firstName} 
    // @PathVariable(name = "firstName") ก็จะเป็นตัวที่บอกว่าจะเอา Frodo ไปใส่ในตัวแปรไหน ในที่นี้คือ String firstName นั่นเอง
    @RequestMapping("/employee/{firstName}")
    public List<Employee> getEmployeeByFirstNameLike(@PathVariable(name = "firstName") String firstName){
        // ดังนั้น String firstName ที่รับเข้ามาก็จะเป็น Frodo
        // this.repository.findAllByFirstNameLike("Frodo");
        List<Employee> list = this.repository.findAllByFirstNameEquals(firstName);
        return list;
    }
}
