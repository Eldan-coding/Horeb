import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App ">
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="Bienvenido a nuestro E-commerce"/>
          </Route>
          
          <Route exact path="/CPU/:id">
            <ItemDetailContainer/>
          </Route>
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
