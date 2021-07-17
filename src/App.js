import HomePage from "./pages/homepage";
import AvonDao from "./pages/avondao";
import NewsPage from "./pages/news_page";
import LogIn from "./pages/login";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/avondao" exact component={AvonDao} />
          <Route path="/app" exact component={LogIn} />
          <Route path="/news" excat component={NewsPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
