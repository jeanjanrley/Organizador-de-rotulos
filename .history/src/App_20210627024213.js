import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './styles/global.scss'

import Home from './pages/home/Home'
import Consultar from './pages/consultar/index'
import Fragrancia from './pages/fragrancia/index'
import Categoria from './pages/categoria/index'
import Categoria from './pages/respon/index'

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path={'/'} exact component={Home}/>
          <Route path={'/consultar'}  component={Consultar}/>
          <Route path={'/fragrancia'}  component={Fragrancia}/>
          <Route path={'/categoria'}  component={Categoria}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
