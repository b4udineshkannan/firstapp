import { useState } from "react";


function ArrayObjectChange(){
    const [position, setPoisition] = useState({x:0, y:0, z:0});
    const [spreadoperator, setSpreadoperator] = useState({s:0, t:0, u:0});
    
    return(
       <div>
        <button onClick={()=>{setPoisition({x:5, y:0, z:0})
        console.log(position);
    }}>stateChange</button>
       
        <h2>{position.x}</h2>
        <h2>{position.y}</h2>
        <h2>{position.z}</h2>


        <button onClick={()=>{setSpreadoperator(
            {...spreadoperator, s:10, t:20} //where ...spreadoperator is a spread operator i.e uing three dots
            )
        console.log(spreadoperator);
    }}>stateChange</button>
       
        <h2>{spreadoperator.s}</h2>
        <h2>{spreadoperator.t}</h2>
        <h2>{spreadoperator.u}</h2>
        </div>
      
       
    )

}





export default ArrayObjectChange;









