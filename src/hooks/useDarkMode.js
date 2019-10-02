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