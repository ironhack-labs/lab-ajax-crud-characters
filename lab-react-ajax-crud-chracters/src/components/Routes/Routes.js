import "./Routes.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import Character from "../Character/Chacacter";
import CreateCharacter from "../CreateCharacter/CreateCharacter";
import NotFound from "../NotFound/NotFound";

export default function Routes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Switch>
        <Route
          path="/character/:id/edit"
          render={(routeProp) => (
            <CreateCharacter id={routeProp.match.params.id} />
          )}
        />
        <Route
          exact
          path="/character/:id"
          render={(routeProp) => <Character {...routeProp} />}
        />
        <Route exact path="/create-character" component={CreateCharacter} />
        <Route path="/:anything" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
