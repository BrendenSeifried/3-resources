import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './views/Main/Main';
import WorkShops from './views/Workshops/Workshops';
import BulletBoard from './views/BulletBoard/BulletBoard';
import LovingFamilies from './views/Loving_Families/LovingFamilies';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
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

          <Route exact path = '/loving_families'>
            <LovingFamilies />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
