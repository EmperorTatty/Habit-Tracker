import React from 'react';
import Dashboard from './Pages/Dashboard';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import  LogInPage  from './Pages/LogInPage';
import Register from './Pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element= {<LogInPage />}/>
        <Route path="/register" element= {<Register/>}/>
        <Route path="/dashboard" element = {<Dashboard />}/>
      </Routes>
    </Router>
  );
}

export default App;

