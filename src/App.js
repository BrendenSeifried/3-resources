import Main from './views/Main/Main';
import './App.css';
import WorkShops from './views/Workshops/Workshops';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>

        <Switch>
          <Route>
            <WorkShops />
          </Route>

          <Route>
            <Main />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
