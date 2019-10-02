/*

## STEP 1 - useLocalStorage

Soon, we'll write a custom hook that sets this class on the body tag. 

That hook is going to compose a `useLocalStorage` inside it to accomplish that, 

  so let's write the localStorage one first.

This is going to be a pretty cool hook. It will be used pretty much the same way as `useState`, 

but with a key and value passed into it - ie `const [name, setName] = useLocalStorage('name', 'Dustin')`.
 You can use `setName` to update the value of `name` on localStorage! Pretty cool, huh? Let's get to it!

- Create a new directory called `hooks`, and a new file in it called `useLocalStorage`.

- Build a function called `useLocalStorage`. Now, to set something to localStorage, 
    we need a key (must be a string) and a value (can be anything). 
    To retrieve something from localStorage, we need the key. 
    To update something in localStorage, you use the same method as adding something new, 
    and it will just replace the old key/value pair in localStorage. Knowing this, let's add `key` 
    and `initialValue` as parameters to the hook.

- We're going to set up some state here. Set up a state property called storedValue.

  - This state property is going to take a function as it's initial value.
      When we do this, whatever that callback function returns is what gets set as the intialValue for the state property.

  - In the callback function, we'll check to see if the item we passed in already exists in localStorage, and return that value, 
      otherwise we'll return whatever initialValue was passed in.

  - Quick note, if you pass in arrays or objects to localStorage, you will need to parse it into JSON.
      Then when you retrieve it, like we do below, you'll need to parse it back into regular JavaScript

- Now, let's return `storedValue` from this hook in an array:

- We're going to use this inside our dark mode hook, 
  but this can be used anywhere for any kind of localStorage needs you have in your apps. 

*/

/* -------------------------------------------------------------------------- */

import {useState} from 'react';

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    });

const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
}; 

return [storedValue, setValue];
};

export default useLocalStorage;

/* Explainiing The Code

Line 45:
Line 46:
Line 47:
Line 48:
Line 49:
Line 50:
Line 51:
Line 52:
Line 53:
Line 54:
Line 55:
Line 56:
Line 57:
Line 58:
Line 59:
Line 60:
Line 61:

*/