import './App.css';
import Home from './pages/home';
import TeacherDashboard from './pages/teacherDash';
import { useState } from 'react';

function App() {

  /* TEMPORARY SWITCH BETWEEN HOME AND TEACHER DASHBOARD - change hook from 'true' to 'false' */
  const [home, setHome] = useState(false);



  return (
    <div className="App">
      {
        home ? <Home /> : <TeacherDashboard />
      }
    </div>
  );
}

export default App;