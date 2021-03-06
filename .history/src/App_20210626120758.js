import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './styles/global.scss'

import Home from './pages/home'

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path={'/'} component={Home}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
