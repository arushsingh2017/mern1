import React from 'react'
import { ToastContainer, toast } from "react-toastify";

// Import toastify css file
// import "react-toastify/dist/ReactToastify.css";
import 'react-toastify/dist/ReactToastify.css'

export default function test() {
    const notify = () => {
        // Calling toast method by passing string
        toast.warning("Hello Geeks");
        // alert("welco")
    };
  return (
    <div>
      <div className="GeeksforGeeks">
            <button onClick={notify}>Click Me!</button>
        </div>
    </div>
  )
}


