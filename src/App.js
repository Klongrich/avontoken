import HomePage from "./pages/homepage";
import NewsPage from "./pages/news_page";
import LogIn from "./pages/DeFi/login";
import VotePage from './pages/Goverence/vote'; 

import DeFiLandingPage from "./pages/HomePage/";

import DesktopDashboard from "./pages/DeFi/Desktop/DesktopDashboard";

import { BrowserRouter, Route, Switch } from "react-router-dom";

// import FakeTakeDown from "./pages/fakeTakeDown";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={DeFiLandingPage} />
          <Route path="/app" exact component={LogIn} />
          <Route path="/news" excat component={NewsPage} />
          <Route path="/vote" exact component={VotePage} />
        </Switch>
      </BrowserRouter>
      
    </>
  );
}

export default App;
