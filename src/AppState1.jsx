import Button from './component/button/Button';
import Input from './component/Input/Input';
import { useState } from 'react';
function AppState1(){

const handleClickButton=(event)=>{
    console.log('ClickButton')
}
const handleChange=()=>{
    console.log('changevalue')
}
const handleChangeValue=(event)=>{
    console.log(event.target.value);
    setmyValue(event.target.value);
}
const [myValue,setmyValue]=useState("I'm a default value");
    return(
        <div>
<Button
type="button"
onClick={handleClickButton}
label='click'
/>
<br /><br />
<Input 
type="text"
placeholder="enter your mail"
onChange={handleChange}
/>
<br /><br />
<Input 
type="text"
placeholder={myValue}
onChange={handleChangeValue}
/>
<br /><br />
<strong>{myValue}</strong>
        </div>
    )
};
export default AppState1;