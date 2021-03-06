import './App.css';
import { IsUserRedirect, ProtectedRoute } from './handlers/routes';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/home';
import TeacherDashboard from './pages/teacherDash';
import * as ROUTES from './constants/routes';
import Authenticate from './hooks/useAuthorise';
import ProjectLibrary from './pages/projLibrary';



function App() {

  const { user } = Authenticate();

  /* IF YOU WANT TO LOG OUT: Go to Browser -> F12 (Dev Tools) -> Application -> Local Storage -> localhost:3000 -> DELETE ALL KEY + VALUE PAIRS */

  return (
    <div className="App">

      <Router>
        <Switch>
          
          <ProtectedRoute  user = {user} path = {ROUTES.TEACH_DASH} >
            <TeacherDashboard />
          </ProtectedRoute>
          
          <IsUserRedirect  user = {user} loggedInPath={ROUTES.TEACH_DASH} path = {ROUTES.HOME} >
            <Home />
          </IsUserRedirect>

        

        </Switch>
      </Router>
    </div>
  );
}

export default App;