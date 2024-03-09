import{ message } from "./Data";
import { useState } from "react";

function Card(){
    /// state variable
    let[message1 , setMessage1] = useState(message);

function handlechange(){
    setMessage1('change the stare Variable');
}

return(
<div>
    <h2>{message1}</h2>
    <button onClick={()=>{handlechange()}}>change</button>
</div>
)
}
export default Card;
    


