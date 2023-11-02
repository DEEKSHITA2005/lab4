import React from 'react';
import UserForm from './UserForm'; // Import your form component
import NavigationBar from './NavigationBar'; // Import your navigation bar component

function App() {
  return (
    <div>
      <NavigationBar /> {/* Render the navigation bar component */}
      <UserForm /> {/* Render the form component */}
    </div>
  );
}

export default App;
