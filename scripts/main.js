var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  render:function(){
    return(
		<a href="">
		<h1>
		mehdi kamari
		</h1>
		</a>
    )
  }

});

var element = (
<b>welcome to reactJS</b>
);
ReactDOM.render(<App/>,document.getElementById('myapp'));
ReactDOM.render(element,document.getElementById('myapp2'));
