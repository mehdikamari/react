var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  getFullName:function(user){
    return user.firstName + " "+ user.lastName;
  },
  render:function(){
    var user2 ={
      firstName : "Mehdi",
      lastName : "Kamari"
    }
    return(
        <div>Fenty Beauty is eponymous of the singer : {this.getFullName(user2)}</div>

    )
  }

});

function getFullName(user){
  return user.name + " "+ user.family;
}
var user ={
  name : "mehdi",
  family : "kamari"
}
var element = (
<b>welcome {getFullName(user)}</b>
);

/*********EC6***********************/
class App3 extends React.Component{
  clickHandler(event){
    event.preventDefault();
    ReactDOM.render(element,document.getElementById('myapp'));
  }
  clickHandler2(event){
    event.preventDefault();
    ReactDOM.render(<App/>,document.getElementById('myapp'));
  }
  render(){
    return (
      <div color="red">
        <a href="#" onClick={this.clickHandler}>Page 1</a>
        
        <a href="#" onClick={this.clickHandler2}>Page 2</a>
      </div>
    );
  }
}
ReactDOM.render(<App3/>,document.getElementById('myapp3'));
