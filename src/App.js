import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

// estos dos componentes eran componentes de clase que se convirtieron a hooks
//import CantidadPokemon from './components/CantidadPokemon';
//import CompraPokemon from './components/CompraPokemon.jsx'

import store from './redux/store';
import { Provider } from 'react-redux'

// cantidad
import CantidadPokemonHook from './components/CantidadPokemonHook';
// botones
import CompraPokemonHook from './components/CompraPokemonHook';
// buscador
import BuscadorPokemon from './components/buscador/BuscadorPokemon'
// resultado de la busqueda
import ResultadoPokemon from './components/buscador/ResultadoPokemon'

function App() {
// la aplicacion se enlaza a redux por medio del provider el cual es el encargado de dejar la store disponible para toda la app 
  return (
    <Provider store={store}>
      <div className='App containter'>
        <div className='row'>
          <div className='col-12'>

            <div className='card mt-5' style={{maxWidth: '370px'}}>
              <p className='App'>
                REDUX REACT APP
              </p>
              <div className='row no-gutters'>
                <div className='col-4'>
                  <img src={require("../src/img/pokemon.jpg")} alt='pokemon' className='card-img' />
                </div>
                <div className='col-8'>

                  <div className='card-body'>
                    <div className='card-title h3 text-center'>
                      <CantidadPokemonHook /> 
                    </div>
                      <CompraPokemonHook />
                  </div>

                </div>
              </div>
            </div>
          </div>
        <div className='col-12 mt-4 border-top pt-3'>
          <BuscadorPokemon />
        </div>
        <div className='col-12'>
          <ResultadoPokemon />
        </div>

      </div>
    </div>
    </Provider>
  );
}

export default App;
