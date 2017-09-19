var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');
// การ require คือการ import ไลบรารีที่ต้องใช้ โดยสิ่งที่ขาดไม่ได้คือ react กับ react-dom
// ส่วนพวก onsen คือนำ framework เข้ามาเสริมให้หน้าตา ui ดูดีขึ้น
// โดยจะนำส่วนที่ import ไปใช้ได้จากตัวแปรที่ประกาศรับ
// เช่นอยากใช้ react-onsenui ก็นำตัวแปร Ons ไปใช้ในการแสดงผล ui ของ onsen-ui


// สร้าง class ชื่อ App โดยใช้ React.createClass()
// โดยการประกาศแบบนี้ ฟังก์ชั่นแต่ละฟังก์ชั่นต้องคั่นด้วยคอมม่า(comma) ก็คืออันนี้ ,
// และการประกาศฟังก์ชั่น ต้องขึ้นต้นด้วยชื่อฟังก์ชั่น ตามด้วยโคล่อน(colon) และคำว่า function(){} ก็คืออันนี้ : function(){  }
// ส่วนใน { } ก็คือโค้ดของฟังก์ชั่นนั้น ๆ แล้วแต่ว่าจะ return อะไร หรือไม่ return ก็ได้
var App = React.createClass({

	render: function() {
		// render เป็นฟังก์ชั่นพื้นฐาน ห้ามเปลี่ยนชื่อ โดยจะใช้บอกว่าอะไรจะอยู่บนหน้าจอบ้าง สำหรับ class นี้ (class App)
		// โดย ฟังก์ชั่นนี้จะแสดง Ons.Page (Page ก็คือหน้าเว็บ )

		// Ons.Page มีการ renderToolBar จากฟังก์ชั่น customRenderToolbar() ด้านบนไงล่ะ

		// ใน Ons.Page มี คำพูดเปล่า ๆ ว่า Hello React & Spring Boot
		// ต่อมาเป็น Ons.List ซึ่งมันคือลิสต์
		// attribute ชื่อ dataSource คือ ข้อมูลที่จะนำมาแสดงในลิสต์ ในที่นี้มีค่าเป็น this.state.emp (emp คือ state ของ class นี้ โดยค่าเริ่มต้นของมันจะได้จากฟังก์ชั่น getInitialState() )
		// ส่วน attribute ชื่อ renderRow คือ attribute ที่ใช้แสดง row แต่ละ row ในลิสต์นี้ (Row คือ ส่วนย่อยของ List) ในที่นี้คือได้จากฟังก์ชั้น customRenderRow()
		// ส่วน attribute ชื่อ renderHeader คือ attribute ที่ใช้แสดง header ของลิสต์ ในที่นี้คือใส่ Ons.ListHeader เข้าไปตรง ๆ เลย ไม่ได้เรียกฟังก์ชั่น (attribute อื่นก็ทำแบบนี้ได้นะ)
		
		return(
			<Ons.Page renderToolbar={this.customRenderToolbar} >
				<h1>Hello React & Spring Boot</h1>
				<Ons.List
					dataSource={this.state.emp}
					renderRow={this.customRenderRow}
					renderHeader={() => <Ons.ListHeader>Employee List</Ons.ListHeader>}
				/>
			</Ons.Page>
		)
	}
	,

	customRenderToolbar: function() {
		// ฟังงก์ชั่น customRenderToolbar คือเราตั้งเอง (หมายความว่าจะตั้งชื่ออื่นก็ได้)
		// โดย return <Ons.ToolBar> หากนำไปใส่ฟังก์ชั่น render มันก็จะแสดงเป็น ToolBar บนหน้าเว็บ
		return (
			<Ons.Toolbar>
				<div className='center'>Onsen UI</div>
				<div className='right'>
            		<Ons.ToolbarButton>
              			<Ons.Icon icon='ion-navicon, material:md-menu'></Ons.Icon>
            		</Ons.ToolbarButton>
            	</div>
			</Ons.Toolbar>
		)
	},

	customRenderRow: function(row, index) {
		// ฟังก์ชั่นนี้เขียนขึ้นมาเองครับ โดยจะรับค่าเป็น row กับ index โดยค่าทั้งสองจะมาจาก dataSource ของ Ons.List
		// มันจะเรียกฟังก์ชั่นนี้ซ้ำ ๆ ให้เองตามจำนวนข้อมูลจาก dataSource

		// index คือ 0, 1, 2, .... เหมือน อาเรย์ครับ เพราะ this.state.emp คือ อาเรย์
		// row คือ value ที่อยู่ใน อาเรย์นั้น ๆ 
		// เช่นเมื่อ index เป็น 0 , row ก็จะเป็นข้อมูลตัวแรก

		// row.firstName หรือ row.lastName มาได้ยังไงก็ตามไปดูที่ Entity ที่ชื่อ Employee.java (ใน /java/com/example/demo)
		// โดยแต่ละ row ใน List นี้จะแสดง ชื่อจริง : นามสกุล 
		return (
			<Ons.ListItem key={index}>
				<div className='center'>
					{row.firstName} : {row.lastName}
				</div>
			</Ons.ListItem>
		);
	},

    componentDidMount: function() {
		// ฟังก์ชั่น componentDidMount เป็นฟังก์ชั่นของ react ซึ่งมันจะถูกเรียกเอง หลังจาก ui ถูก render (แสดง) แล้ว
		// ตรงนี้คือเรียกฟังก์ชั่น employeeList()
        this.employeeList();
    },

	getInitialState: function() {
		// ฟังก์ชั่นนี้เป็นของ react เป็นการกำหนดค่าเริ่มต้นให้กับ state ของ class นี้ โดยต้อง return ข้อมูล state เริ่มต้น ในรูปแบบ json
		// json คืออะไร .... มันคือ object ของ javascript ต้องขึ้นต้นด้วย { และจบด้วย }
		// ข้อมูลด้านในประกอบด้วย key (ในที่นี้คือ emp) ต่อด้วย : ตามด้วย value ของ key นั้น (ในที่นี้คือ [] อาเรย์เปล่า ๆ)
		// เราสามารถเพิ่มข้อมูลได้หลาย ๆ อย่างใน object นี้โดยการเพิ่มคอมม่า แล้วใส่ key กับ value เข้าไป เช่น อยากเพิ่ม name = "john" ก็แบบนี้ ...
		// {
		//    emp: [] ,
		//	  name: "john"
		// };
		// state ใน react คือตัวแปลที่คล้าย ๆ กับ global ใน java จะสามารถเรียกใช้ได้ทุกที่ใน class นี้โดยใช้ this.state เช่น
		// this.state.emp
        return {
            emp: []
        };
	},
    
	employeeList: function() {
		// employeeList() คือฟังก์ชั่นที่ผมสร้างขึ้นมาเอง
		// client() คือฟังก์ชั่นที่ใช้เรียก API  โดยอาจารย์เขียนมาให้เป็น library แล้ว
		// หน้าที่เราคือ import มัน ขึ้นไปดูที่บรรทัด 5
		
		// API คืออะไร
		// API คือ สิ่งที่จะส่งข้อมูลกลับมาให้ เมื่อมันถูกเรียก 
		// โดยปกติ API จะอยู่ที่ Back-End ซึ่งก็คือ ResController ของ java นั่นเอง อยากรู้เป็นยังไงตามไปดูไฟล์ /java/com/example/demo/RestAPIController.java

		// client() เรียก API ที่  url คือ /employee/list
		// จะได้ข้อมูลกลับมาเป็น object ที่ชื่อ response
		// ใช้คำสั่ง this.setState();
		
		client({method: 'GET', path: '/employee/list'}).done(response => {
			// console.log() เป็นฟังก์ชั่นของ javascript ทำหน้าที่คล้าย System.out.println() ใน java
			// ดูได้โดยการกด F12 แล้วเลือก tab console ถ้าเป็น google chrome
			console.log(response);
			this.setState({emp: response.entity});
		});
	}
	// หากจะเพิ่มฟังก์ชั่นอื่น ๆ ก็ใส่คอมม่าตามตรงนี้ แล้วเพิ่มได้เลย
	// เช่นแบบนี้ .....
	,
	hello: function(){
		console.log("hello world");
	}

});


// การสร้าง class ui ของ react เขียนได้อีกแบบนะ นอกจาก React.createClass() แบบด้านล่างนี้จะได้ผลลัพธ์เหมือนด้านบน
/*
export default class App extends React.Component {
    renderToolbar (){
		return(
            <Ons.Toolbar>
            	<div className='center'>Onsen UI</div>
				<div className='right'>
					<Ons.ToolbarButton>
						<Ons.Icon icon='ion-navicon, material:md-menu'></Ons.Icon>
					</Ons.ToolbarButton>
				</div>
            </Ons.Toolbar>
		);
	}

    render() {
        return(
            <Ons.Page
				renderToolbar={this.renderToolbar} >
				<p>Hello World</p>
			</Ons.Page>
		)
    }
}
*/
ReactDOM.render(<App />, document.getElementById('react'));