import React from 'react';
import logo from './resources/image/logo.svg';
import './resources/style/App.css';


class App extends React.Component{

  constructor(props: Readonly<{}>){
    super(props)
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

}


export default App;
