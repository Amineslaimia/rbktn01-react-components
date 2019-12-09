class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.list}</li>
    );
  }
}
var GroceryList = (props) => (
  <ul>
    {props.lists.map(list =>
      <GroceryListItem list={list} />
    )}
  </ul>
);
var App = () => (
  <div>
    <h2>My Todo List</h2>
    <GroceryList lists={['milk', 'bananas', 'eggs']}/> 
  </div>
);
 
ReactDOM.render(<App/>, document.getElementById('app'));