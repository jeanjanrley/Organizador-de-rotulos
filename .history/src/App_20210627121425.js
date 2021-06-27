import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './styles/global.scss'

import Home from './pages/home/Home'
import Consultar from './pages/consultar/index'
import Fragrancia from './pages/fragrancia/index'
import Categoria from './pages/categoria/index'
import Responsavel from './pages/responsavel/index'
import ContraRotulo from './pages/contraRotulo/index'
import CodigoDeBarras from './pages/codigo/'

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path={'/'} exact component={Home}/>
          <Route path={'/consultar'}  component={Consultar}/>
          <Route path={'/fragrancia'}  component={Fragrancia}/>
          <Route path={'/categoria'}  component={Categoria}/>
          <Route path={'/responsavel-tecnico'}  component={Responsavel}/>
          <Route path={'/contra-rotulo'}  component={ContraRotulo}/>
          <Route path={'/codigo-de-barras'}  component={CodigoDeBarras}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
