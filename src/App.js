import Create from './Create'
import Details from './Details';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Create />
      </Route>
      <Route exact path="/products/:id">
        <Details />
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
