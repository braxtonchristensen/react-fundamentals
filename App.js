import React from 'react';

//Component (has state)
//Composite component
//Owner
class App extends React.Component {
  constructor(){
    //super gives us the context for 'this' within component
    super();
    this.state = {txt: 'this is teh state txt'}
    //add this so we can just call this.upate when ever we want to use this method
    this.update = this.update.bind(this)
  }
  update(event) {
    this.setState({txt: event.target.value});
  }
  render() {
    return (
      <div>
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
      </div>
    );
  }
}

//Stateless Component
//Child Component
//Ownee
const Widget = (props) => {
  return (
    //changes the state.txt value on parent
    <div>
      <input type='text'
        onChange={props.update} />
      <h1>{props.txt}</h1>
    </div>
  );
}
export default App