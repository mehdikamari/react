var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  render:function(){
    return(
        <div>Fenty Beauty is eponymous of the singer</div>
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
ReactDOM.render(<App/>,document.getElementById('myapp2'));
ReactDOM.render(element,document.getElementById('myapp'));
