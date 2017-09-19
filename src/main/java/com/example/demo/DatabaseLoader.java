package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	// ส่วนนี้อธิบายแล้วใน RestAPIController.java ----------------
	private final EmployeeRepository repository;

	@Autowired
	public DatabaseLoader(EmployeeRepository repository) {
		this.repository = repository;
	}
	//-------------------------------------------------------

	// ใส่ค่า demo ให้กับ Database โดย เอา repo มาแล้วเรียก method save() โดยใส่ Employee เข้าไป
	@Override
	public void run(String... strings) throws Exception {
		this.repository.save(new Employee("Frodo", "Baggins", "ring bearer"));
		this.repository.save(new Employee("John", "Snow", "King of the north"));

		// จะ new ก่อน แล้วค่อยใส่เข้าไปก็ได้
		Employee emp1 = new Employee();
		emp1.setFirstName("gradle");
		emp1.setLastName("BootRun");
		emp1.setDescription("react boot project");
		this.repository.save(emp1);
	}
}