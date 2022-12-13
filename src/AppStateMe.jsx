import React from "react";
import Button from "./component/button/Button";
import Input from "./component/Input/Input";
import {useState} from "react";
function AppStateMe(){
    const handleclick=()=>{
        console.log('click');
    }
    const [myValue,setmyValue]=useState('default text');
    const changeValue=(event)=>{
        setmyValue(event.target.value)
    }
    return (
        <div>
            <h1>Welcome {myValue}</h1>
            <Input
            type="text"
            placeholder="Username"
            onChange={changeValue}
            />
            <Input 
            type="password"
            placeholder="enter your password"
            />
<Button
type="submit"
label="Connect"
onClick={handleclick}
/>
        </div>
    )
};
export default AppStateMe;