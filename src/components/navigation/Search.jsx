// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { setSearchTerm } from "../../features/filter/filterSlice";

// export default function Search(){
//     const [input, setInput] = useState('');
//     const dispatch = useDispatch();
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(setSearchTerm(input))
//     }
//     return (
//         <form onSubmit={handleSubmit} >
//             <input
//                 className="outline-none border-none mr-2"
//                 type="search"
//                 name="search"
//                 placeholder="Search"
//                 value={input}
//                 onChange={(e)=>setInput(e.target.value)}
//             />
//         </form>
//     )
// }


import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../features/filter/filterSlice";

// Debounce হুক
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

export default function Search() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    // ডেবাউন্স করা ইনপুট
    const debouncedInput = useDebounce(input, 500);

    useEffect(() => {
        if (debouncedInput !== "") {
            dispatch(setSearchTerm(debouncedInput));
        }
    }, [debouncedInput, dispatch]);

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                className="outline-none border-none mr-2"
                type="search"
                name="search"
                placeholder="Search"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </form>
    );
}
