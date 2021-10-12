import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';

import CharacterList from './characters/CharacterList';
import CharacterDetails from './characters/CharacterDetails';
import CharacterCreate from './characters/CharacterCreate';
import CharacterUpdate from './characters/CharacterUpdate';
import CharacterDelete from './characters/CharacterDelete';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Route exact path='/' component={CharacterList}/>
        <Switch>
          <Route exact path='/characters/create' component={CharacterCreate}/>
          <Route exact path='/characters/update/:id' component={CharacterUpdate}/>
          <Route exact path='/characters/delete/:id' componet={CharacterDelete}/>
          <Route path='/characters/:id' component={CharacterDetails}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
