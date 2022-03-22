import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './views/Main/Main';
import WorkShops from './views/Workshops/Workshops';
import BulletBoard from './views/BulletBoard/BulletBoard';

function App() {
  return (
    <BrowserRouter>
      <div>

        <Switch>
          <Route exact path = '/workshops'>
            <WorkShops />
          </Route>

          <Route exact path = '/'>
            <Main />
          </Route>

          <Route exact path = '/bulletboard'>
            <BulletBoard />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
