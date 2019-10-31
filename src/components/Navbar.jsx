/*

## STEP 3 - Using the hook in a component

Now that we have composed our different pieces of stateful logic, let's use it in our component!

- Import the dark mode hook into the `NavBar` component

- Looking at this component, we see that we are controlling the toggle with some state. 

The state hook here returns a `darkMode` value, and a `setDarkMode` function. 

- Isn't that exactly what our `useDarkMode` hook returns? Replace the state hook with our hook, 

Click the toggle to verify

*/

import React from 'react';
import useDarkMode from '../hooks/useDarkMode.js'

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;

/* Explainiing The Code

Line 20: We import our custom hook, "UseDarkMode" from our file UseDarkMode.JS 
  and then introduce it into our Navbar function toggle.

*/