import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import './App.css';
import Home from './Views/Home';
import ProductView from './Views/ProductView';
import PurchaseView from './Views/PurchaseView';



function App() {
  return (
    <div className="app bg-home">
      <Switch>
        <Route path={'/'} exact component={Home}/>
        <Route path={'/product/:id'} exact component={ProductView}/>
        <Route path={'/purchase'} exact component={PurchaseView}/>
        <Route render={() => <Redirect to={'/'} />}/>

      </Switch>
    </div>
  );
}

export default App;
