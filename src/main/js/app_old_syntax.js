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

	renderToolbar: function() {
		// ฟังงก์ชั่น renderToolbar คือเราตั้งเอง (หมายความว่าจะตั้งชื่ออื่นก็ได้)
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

    renderRow: function(row, index) {

        const fname = row.firstName;
        const lname = row.lastName;

        return (
			<Ons.ListItem key={index}>
				<div className='center'>
                    {fname} : {lname}
				</div>
			</Ons.ListItem>
        );
    },

	render: function() {
		// render เป็นฟังก์ชั่นพื้นฐาน ห้ามเปลี่ยนชื่อ โดยจะใช้บอกว่าอะไรจะอยู่บนหน้าจอบ้าง สำหรับ class นี้ (class App)
		// โดย มันจะแสดง Page ที่มี ToolBar อยู่ใน Page (Page ก็คือหน้าเว็บ แล้วหน้าเว็บก็มี ToolBar)
		// ถัดจาด ToolBar ก็เป็น คำพูดเปล่า ๆ ว่า Hello World
		return(
			<Ons.Page
				renderToolbar={this.renderToolbar} >
				<p>Hello World</p>
				<Ons.List
					dataSource={this.state.emp}
					renderRow={this.renderRow}
					renderHeader={() => <Ons.ListHeader>Employee List</Ons.ListHeader>}
				/>
			</Ons.Page>
		)
	}

	// หากจะเพิ่มฟังก์ชั่นอื่น ๆ ก็ใส่คอมม่าตามตรงนี้ แล้วเพิ่มได้เลย
	,
    componentDidMount: function() {
        this.employeeList();
    },

	getInitialState: function() {
        return {
            emp: []
        };
	},
    employeeList: function() {
		fetch('/employee/Frodo')
			.then(data => data.json())
			.then(data => {
                this.setState({ emp: data });
                console.log(this.state.emp);
    		});
    }

});


// การสร้าง class ui ของ react เขียนได้อีกแบบนะ แบบด้านล่างนี้จะได้ผลลัพธ์เหมือนด้านบน
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