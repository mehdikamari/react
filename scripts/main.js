//var React = require('react');
//var ReactDOM = require('react-dom');
/*EC6*********/
// import React,{Component} from 'react';
// import {Row,Col} from 'antd';
// import ReactDOM from 'react-dom';
/*************/
// var App = React.createClass({
//   getFullName:function(user){
//     return user.firstName + " "+ user.lastName;
//   },
//   render:function(){
//     var user2 ={
//       firstName : "Mehdi",
//       lastName : "Kamari"
//     }
//     return(
//
//         <Row>
//           <Col span=12>
//             <div>Fenty Beauty is eponymous of the singer : {this.getFullName(user2)}</div>
//           </Col>
//         </Row>
//     )
//   }
//
// });
//
// function getFullName(user){
//   return user.name + " "+ user.family;
// }
// var user ={
//   name : "mehdi",
//   family : "kamari"
// }
// var element = (
// <b>welcome {getFullName(user)}</b>
// );
//
// /*********EC6***********************/
// class App3 extends React.Component{
//   clickHandler(event){
//     event.preventDefault();
//     ReactDOM.render(element,document.getElementById('myapp'));
//   }
//   clickHandler2(event){
//     event.preventDefault();
//     ReactDOM.render(<App/>,document.getElementById('myapp'));
//   }
//   render(){
//     return (
//       <div color="red">
//         <a href="#" onClick={this.clickHandler}>Page 1</a>
//
//         <a href="#" onClick={this.clickHandler2}>Page 2</a>
//       </div>
//     );
//   }
// }
//ReactDOM.render(<App3/>,document.getElementById('myapp3'));
/*************************************************/
import React,{Component} from 'react';
import {Row,Col,Menu,Icon} from 'antd';
import ReactDOM from 'react-dom';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.MenuItemGroup;
class Header extends Component{

  render(){
    return(
      <Menu selectedKey="home" mode="horizontal">
        <Menu.Item key="home">
          <Icon type="home"/>Home
        </Menu.Item>
        <Menu.Item key="about">
          <Icon type="question-circle" />About
        </Menu.Item>
        <SubMenu title={<span><Icon type="question-circle" />Contact Us</span>}>
        <Menu.Item key="contactForm">
          <Icon type="question-circle" />Contact Form
        </Menu.Item>
        <Menu.Item key="contactOffice">
          <Icon type="question-circle" />Meet Us on office
        </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
 class Welcome extends Component{
   render(){
     return(
       <div>
        <Header/>
        <h1>Welcome to my website</h1>
        </div>
     );
   }
 }
 ReactDOM.render(<Welcome/>,document.getElementById('welcome'));
