import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import {DataProvider} from './services/CartContext'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {


  return (
    <DataProvider>
      <BrowserRouter>
        <div className="App ">
          <NavBar/>
          <Switch>
            <Route exact path="/">
              <ItemListContainer greeting="Bienvenido a nuestro E-commerce"/>
            </Route>
            
            <Route exact path="/CPU/:id/:tipo">
              <ItemDetailContainer/>
            </Route>

            <Route exact path="/Cart">
              <Cart/>
            </Route>
          </Switch>
          
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
