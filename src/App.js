/** let custom components start with a capital letter */

import { Route, Switch } from "react-router-dom";

import AerialBackground from "./components/pages/AerialBackground";
import CurrentProjects from "./components/pages/CurrentProjects";
import Services from "./components/pages/Services";
import HomePage from "./components/pages/Homepage";

import HauntBackground from "./components/pages/HauntBackground";

import Layout from "./components/layout/Layout";

function App() {
  return (
    //localhost:3000
    //mypage.com/favorites or /whatever
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/aerial-background">
          <AerialBackground />
        </Route>
        <Route path="/haunt-background">
          <HauntBackground />
        </Route>
        <Route path="/current-projects">
          <CurrentProjects />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
