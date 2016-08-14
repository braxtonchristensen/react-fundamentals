import React from 'react';

class App extends React.Component {
  constructor(){
    //super gives us the context for 'this' within component
    super();
    this.state = {txt: 'this is teh state txt'}
  }
  update(event) {
    this.setState({txt: event.target.value});
  }
  render() {
    return (
      <div>
        <input type='text'
          onChange={this.update.bind(this)} />
        <h1>{this.state.txt}</h1>
      </div>
    );
  }
}

export default App