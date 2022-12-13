import { useState } from "react";
import Button from "./component/button/Button";
import Input from "./component/Input/Input";
function Counter() {
    const [value,setValue]=useState(0)
    const clickChangePlus=()=>{
        setValue(value+1);
    }
    const clickChangeMinus=()=>{
        setValue(value-1);
    }
    const handleChange=()=>{
        alert('cannot be changed')
    }
    return(
        <div>
            
            <center>
            <Button
            className="mybutton"
            type="button"
            label="+"
            onClick={clickChangePlus}
            />
            
            <Input
            type="text"
            value={value}
            placeholde=""
            onChange={handleChange}
            />
            
            <Button
            className="mybutton"
            type="button"
            label="-"
            onClick={clickChangeMinus}

            />
            </center>
            </div>
    )
};
export default Counter;