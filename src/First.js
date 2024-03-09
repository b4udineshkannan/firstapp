
import { message, arr, arrobj } from "./Data";
import './First.css';
let text = "fdsfsf";



function First() {
    function handleClick(a){
        console.log('onclick fired', a);
    }
    return (
        <div>
            <h1>{message}</h1>
            <h2>first section</h2>
            <h2>{text}</h2>
        

        {
        arr.map((val) => {
            return <li>{val}</li>
        })
    }

    <div className="card">
        {arrobj.map((val) => {
            return (
                <div className="card-in">
                    <img src={val.imgurl} />
                    <h2>{val.name}</h2>
                    <h2>{val.age}</h2>
                    <h2>{val.para}</h2>
                </div>
            )
        })

        }
    </div>

    <div>
        <button onClick={()=>{console.log('sdfsfsfs');}}>Click</button>
        <button onClick={()=>{handleClick(23)}}>Click</button>
    </div>
    </div>
)
}


export default First;