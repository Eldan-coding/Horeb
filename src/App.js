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
            
            <Route exact path="/Categoria/:catid">{/* filtramos los productos por diferentes categorias (CPU, GPU, RAM, BOARD) */}
              <ItemListContainer greeting="Bienvenido a nuestro E-commerce"/>
            </Route>
            
            <Route exact path="/CPU/:id/:tipo">{/* Llevamos al cliente a el producto seleccionado para una posible compra o editar la misma*/}
              <ItemDetailContainer/>
            </Route>

            <Route exact path="/Cart">{/* Vamos al carrito */}
              <Cart/>
            </Route>
          </Switch>
          
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
