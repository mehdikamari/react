var react = require('react');
var reactDOM = require('react-dom');

var App = react.createClass({
  render:function(){
    return(
      <h1>salaam</h1>
    )
  }
  
});

reactDOM.render(<App/>,document.getElementById('myapp'));