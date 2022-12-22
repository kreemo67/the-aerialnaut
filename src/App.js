/** let custom components start with a capital letter */
import Todo from "./components/Todo";
import { Route, Switch } from "react-router-dom";

import Layout from "./components/layout/Layout";

function App() {
  return (
    //localhost:3000
    //mypage.com/favorites or /whatever
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
