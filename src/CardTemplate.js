//parent page

import { useState } from "react"; 
import { arrobj } from "./Data";
import CardView from "./CardView";

function CardTemplate(){
    const [cardObj, setCardObj] = useState(arrobj);
    const [receiveData, setReceiveData] = useState('');
    return (

        <div>
            <h2>{receiveData}</h2>
        {
            cardObj.map((val)=>{
                return(
                    <div>
                    <CardView card={val} onreceive={(a)=>{setReceiveData(a)}}/>
                    </div>
                )
            })

        }
        </div>
    )
}

export default CardTemplate;