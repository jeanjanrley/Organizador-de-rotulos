import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './styles/global.scss'

import Home from './pages/home/Home'
import Consultar from './pages/consultar/index'
import Fragrancia from './pages/fragrancia/index'

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path={'/'} exact component={Home}/>
          <Route path={'/consultar'}  component={Consultar}/>
          <Route path={'/fragrancia'}  component={Fragrancia}/>
          <Route path={'/categoria'}  component={Fragrancia}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
