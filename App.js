import React, { useState } from 'react';
import Login from './components/Login';
import HomePage from './components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {user ? (
        <HomePage user={user} />
      ) : (
        <Login onLogin={setUser} />
      )}
    </div>
  );
}

export default App;