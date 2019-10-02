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

Line 36:
Line 37:
Line 38:
Line 39:
Line 40:
Line 41:
Line 42:
Line 43:
Line 44:
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

*/