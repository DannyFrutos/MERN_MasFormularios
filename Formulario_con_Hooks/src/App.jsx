import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Form from './componentes/Form';
import User from './componentes/User';

function App() {
  const [user, setUser] = useState(null);

  const handleUserCreate = (newUser) => {
    setUser(newUser);
  };

  const handleUserUpdate = (updatedUser) => {
    setUser(updatedUser);
  };

  return (
    <>
      <div className="container">
        <Form onCreateUser={handleUserCreate} onUpdateUser={handleUserUpdate} user={user} />
        <h1>Your Form Data</h1>
        <User user={user} />
      </div>
    </>
  );
}

export default App;