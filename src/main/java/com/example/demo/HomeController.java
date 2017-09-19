package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

// Controller คือ ตัวที่จะบอกว่าเราใส่ url อะไร แล้วให้ดึงไฟล์ ui หน้าไหนมาแสดง
// @Controller คือการประกาศว่า class นี้จะเป็น controller
@Controller
public class HomeController {

	// RequestMapping มี value เป็น "/" และ return "index"
	// หมายความว่า เราใส่ http://localhost:8080/ มันจะนำหน้า ui ที่ชื่อ index.html มาแสดง
	// ไฟล์ ui นี้อยู่ที่ resources/templates/index.html
	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}
}
