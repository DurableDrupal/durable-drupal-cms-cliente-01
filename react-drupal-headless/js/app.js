ReactDOM.render(

<h1>React is awesome!</h1>,
document.getElementById('container')
);

class App extends React.Component {
 constructor() {
  super();
  // Set up initial state
  this.state = {
    data: []
  }
}

// after a component is rendered for the first time call the componentDidMount() method
componentDidMount() {
  var th = this;
  this.serverRequest = axios.get(this.props.source)
    .then(function(blog) {
      th.setState({
        data: blog.data
      });
    })
}

// call the componentWillUnMount() method before a component is unmounted from the DOM
componentWillUnmount() {
  this.serverRequest.abort();
}

render() {
  var titles = [];
  this.state.data.forEach(item => {
    titles.push(<h3 className="blogs">{item.title[0].value}</h3> );
  });
  return (
    <div className="container">
      <div className="row">
          <h1 className="title">Blogs:</h1>
          {titles}
      </div>
    </div>
  );
}
}

// render into DOM
ReactDOM.render(
<App source="http://localhost/drupalheadlessexample/api/blogs" />,
document.getElementById('container')
);
