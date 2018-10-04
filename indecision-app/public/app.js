console.log('App.js is Running!');


//JSX - Javascript XML
//var template = <p>This is JSX from app.js!</p>;
var appRoot = document.getElementById('app');

var template = React.createElement(
    "h1",
    { id: "someid" },
    "This is JSX from app.js!"
  );
ReactDOM.render(template,appRoot);