import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import EmailForm from './components/EmailForm';

function App() {
  const [showEmailForm, setShowEmailForm] = useState(false);

  const handleStart = () => {
    setShowEmailForm(true);
  };

  return (
    <div className="App">
      {!showEmailForm ? (
        <div onClick={handleStart}>
          <WelcomeScreen />
        </div>
      ) : (
        <EmailForm />
      )}
    </div>
  );
}

export default App;
