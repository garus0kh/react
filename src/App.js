import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CalProperty from './components/CalProperty';
import CalTrade from './components/CalTrade';
import CalGet from './components/CalGet';
import MyNav from './components/MyNav';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'property'
    }
  }
  getContent() {
    var _main = null;
    if(this.state.mode === 'property') {
      _main = <CalProperty />
    } else if(this.state.mode === 'trade') {
      _main = <CalTrade />
    } else if(this.state.mode === 'get') {
      _main = <CalGet />
    }
    return _main;
  }
  
  render() {
    return (
      <div className="App">
        <MyNav onChangePage={function(_mode) {
          this.setState({
            mode:_mode
          })
        }.bind(this)}/>
          { this.getContent() }
      </div>
    );
  }
}

export default App;
