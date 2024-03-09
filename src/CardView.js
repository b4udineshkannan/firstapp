import { useState } from "react";

// child page
function CardView(props){

    const [name1, setName1] = useState('i am from cardview component');

    return(
        <div>
            <img src={props.card.imgurl} />
            <h2>{props.card.name}</h2>
            <p>{props.card.para}</p>
            <button onClick={()=>{ props.onreceive(name1)}}>send</button>


        </div>
    )

}
export default CardView;