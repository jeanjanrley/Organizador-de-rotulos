import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './styles/global.scss'

import Home from './pages/home/Home'
import Home from './pages/home/index'

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path={'/'} exact component={Home}/>
          <Route path={'/consultar'}  component={Consultar}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
