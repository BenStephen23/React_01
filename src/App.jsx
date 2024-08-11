import { useState } from 'react'
import Name from './components/Name'
import Image from './components/Image'
import Price from './components/Price'
import Description from './components/Description'

import './App.css'

function App() {
  const firstName = "Stephen"; 

  return (
    <div className="container mt-5">
      <div className="card" style={{ width: '18rem' }}>
        <Image />
        <div className="card-body">
          <Name />
          <Price />
          <Description />
        </div>
      </div>
      <div className="mt-4">
        {firstName ? (
          <>
            <h3>Hello, {firstName}!</h3>
            <img src="./brad.jpeg" alt="Welcome" className="welcome-image" />
          </>
        ) : (
          <h3>Hello, there!</h3>
        )}
      </div>
    </div>
  );
}

export default App;
