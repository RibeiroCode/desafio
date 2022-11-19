import React, {ReactElement} from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import { RouteComponentProps,withRouter, Link, Switch, Route,} from "react-router-dom";
import UserForm from './imports/ui/pages/UserForm';

function App(): ReactElement {
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
      
        <Link to={"/userForm"}> Criar Usuário</Link>
        
      </header>
     <Switch>
     <Route path ="/userform" exact component ={UserForm}/>
     </Switch>
      
    </div>

      

  );
  }


export default App;
