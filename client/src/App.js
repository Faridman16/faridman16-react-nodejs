import React from 'react';
import {Route} from 'react-router-dom';
import Flame from './components/Flame';
import Admin from './components/Admin';

class App extends React.Component {
  constructor(){
    super();
    this.state = {data:'', time:''}
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={Flame} />
        <Route path="/admin" render={(props)=> <Admin />}/>
      </div>
    );
  }
}

export default App;



