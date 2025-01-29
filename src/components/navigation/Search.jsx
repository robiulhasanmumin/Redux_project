import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../features/filter/filterSlice";
import { useNavigate } from "react-router-dom";

export default function Search(){
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(input))
    }
    useEffect(() => {
                const delayDebounceFn = setTimeout(() => {
                    dispatch(setSearchTerm(input)); 
        
                    if (input.trim() !== "") {
                        navigate("/"); }
        
                }, 500); 
        
                return () => clearTimeout(delayDebounceFn);

            }, [input, dispatch, navigate]);
        

    return (
        <form onSubmit={handleSubmit} >
            <input
                className="outline-none border-none mr-2"
                type="search"
                name="search"
                placeholder="Search"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
            />
        </form>
    )
}




// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setSearchTerm } from "../../features/filter/filterSlice";
// import { useNavigate } from "react-router-dom";

// export default function Search() {
//     const [input, setInput] = useState("");
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     // ডিবাউন্স লজিক
//     useEffect(() => {
//         const delayDebounceFn = setTimeout(() => {
//             dispatch(setSearchTerm(input)); // সার্চ অ্যাকশন ডিপ্যাচ

//             if (input.trim() !== "") {
//                 navigate("/"); }// হোম পেজে রিডিরেক্ট

//         }, 500); // ৫০০ মিলিসেকেন্ড ওয়েট

//         return () => clearTimeout(delayDebounceFn); // আগের টাইমআউট ক্লিয়ার করা
//     }, [input, dispatch, navigate]);

//     return (
//         <form onSubmit={(e) => e.preventDefault()}>
//             <input
//                 className="outline-none border-none mr-2"
//                 type="search"
//                 name="search"
//                 placeholder="Search"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//             />
//         </form>
//     );
// }

