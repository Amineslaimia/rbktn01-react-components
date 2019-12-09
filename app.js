// TODO
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li>{this.props.list}</li>
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