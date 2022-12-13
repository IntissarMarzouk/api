import { useState } from "react";
function AppState3(){
const [val,setVal]=useState();
const handleChangeVal=(event)=>{
    setVal(event.target.value);
}

const divs=[1,2,3,4,5,6,7,8,9];
    return(
        <div>
            <textarea 
            style={{width:'70%'}}
            value={val}
            name="" 
            id="" 
            rows="30"
            onChange={handleChangeVal}
            ></textarea>
            <div
            style={{
                display:"flex",
                flexWrap:'wrap',
                justifyContent:"space-around",
                gap:"20px"

            }}
            >
                {
divs.map((element,index)=>{
    return(
        <div
        key={index}
        style={{
            width:'30%',
            minHeight:'150px',
            border:'1px solid gray'
        }}
        >
            {index}:  {val}
        </div>
    )
})
}
            </div>
        </div>
    )
}
export default AppState3;