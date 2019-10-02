/*

## STEP 2 - useDarkMode

- Inside the `hooks` directory, add a new file called `useDarkMode`.

- Build a function called `useDarkMode`.

- Import `useLocalStorage`

- Call `useLocalStorage` and pass in the key you want to use to store whether or not dark mode is enabled. 

- Remember, this hook returns an array with a value and a setter in an array, exactly like the state hook, 
    so make sure to capture those values in a `const` - `const [someValue, setSomeValue] = useLocalStorage('your key here')`
    
- Now to add the class to the body. 
    If we need to manipulate the DOM directly, so let's use the effect hook.
        Import and set up your effect hook.
            Inside it, check to see if the value from `useLocalStorage` is true or false.
                If it's true, add the class `dark-mode` to the `body` element.
                If it's false, remove the class from the `body` element.
                    We don't want this effect to run every time anything in the component changes, right?
                    Think about what piece of data this hook depends on, and should be synced with, and add that in its dependency array.

- Finally, we need to return something out of here so we can use this in our app. 
    We'll need to know if dark mode is enabled.
        And we'll need a setter function to toggle dark mode. 
            Let's just forward the value and the setter that were returned out of the `useLocalStorage` call. 
                Return those two values in an array as well.

*/

/* -------------------------------------------------------------------------- */


import useLocalStorage from "./useLocalStorage";
import {useEffect} from 'react';

const useDarkMode = () => {
    const [storedValue, setStoredValue] = useLocalStorage("toggle");
    
    console.log(setStoredValue)

    useEffect(() => {
        storedValue 
            ? document.body.classList.add("dark-mode") 
            : document.body.classList.remove("dark-mode")
        }, 
            [storedValue]);

return [storedValue, setStoredValue];

};

export default useDarkMode;

/* Explainiing The Code

Line 36: We are IMPORTING our Custom Hook, UseLocalStorage, from UseLocalStorage.JS
Line 37: We are IMPORTING, UseEffect, from React natively
Line 38: - Empty Space
Line 39: We create our custom hook, constant, useDarkMode, that takes in the properities and logic in line 40.
Line 40: We are in a constant state between the initial stored value, and what becomes the new stored value. Creating the toggle option.
Line 41: - Empty Space
Line 42: - Console log
Line 43: - Empty Space
Line 44: We create the useEffect parameter inside the function UseDarkMode
Line 45: We set the location to StoredValue
Line 46: If the Stored Value on the document body's class list is NOT found, add ("Dark-Mode")
Line 47: If the Stored Value on the document body's class list is found, remove ("Dark-Mode")
Line 48: - Notation
Line 49: - ?
Line 50: - Empty Space
Line 51: Returning our value arrays
Line 52: - Empty Space
Line 53: - Notation
Line 54: - Empty Space
Line 55: We are EXPORTING our Custom Hook, UseDarkMode, so that it can be referenced later on.

*/