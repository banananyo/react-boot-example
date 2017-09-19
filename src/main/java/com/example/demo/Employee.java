package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

// @Data คือการประกาศว่าจะใช้ Lombok
// ซึ่งคือให้โปแกรมสร้าง getter setter ให้เราเองโดยเราไม่ต้องเขียน
// @Entity คือการบอกว่านี้คือ class ที่จะไปจับคู่กับข้อมูลในตารางในฐานข้อมูล โดยตารางชื่อตาม class เลย คือ employee (ตัวพิมพ์เล็ก)
@Data
@Entity
public class Employee {

	// @Id คือการบอกว่า field นี้เป็น primary key ในฐานข้อมูล
	// @GeneratedValue คือทำให้เวลาเรา new Employee() แล้วจะไม่ต้องใส่ค่า id โดยมันจะใส่ให้เราเอง
	private @Id @GeneratedValue Long id;

	// field อื่น ๆ ก็ใส่ไปปกติ
	private String firstName;
	private String lastName;
	private String description;

	// constructor แบบไม่รับพารามิเตอร์ อันนี้เมื่อเรา new Employee() จะมีค่าเเค่ id 
	public Employee() {}

	// constructor รับพารามิเตอร์มา แล้ว set ให้ทุก ๆ field 
	// สังเกตุว่าไม่ต้อง set id  เพราะมันจะใส่ให้เราเอง
	public Employee(String firstName, String lastName, String description) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.description = description;
	}
}