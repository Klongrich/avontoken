import HomePage from "./Components/homepage";
import AvonDao from "./pages/avondao";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/avondao" exact component={AvonDao} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
