import React, { useRef, useMemo, useEffect, useState } from "react";
import Button from "./component/button/Button";
import Cards from "./component/Cards/Cards";
function Appevents(){


    
    const handleClick=()=>{
        console.log('click title');
    }
    const handleMouseEntred=()=>{
        console.log('welcome');
    }
    const handleMouseleave=()=>{
        console.log('goodbye');
    }
    const handleChange=()=>{
        console.log('change');
    }
    const handleClickButton=()=>{
        console.log('button clicked');
    }
    
    const keyup=()=>{
        console.log('done');
        
    }
    
    return(<div>
        <Button 
        type="submit"
        onClick={handleClick}
        label="Submit"
        />
        <Cards 
        title="My Card"
        texte="Some quick example text to build on the card title and make up the
        bulk of the card's content."
        label="Go somewhere"
        />
<h1 
style={{color:'pink',fontSize:'20px',padding:'5px'}} 
onClick={handleClick} 
onMouseEnter={handleMouseEntred} 
onMouseLeave={handleMouseleave}

>
    Hello from AppEvents Component
</h1>
<label>Username</label>
<input id='input' type='text'
onChange={handleChange}
onKeyUp={keyup}>

</input>
<button
onClick={handleClickButton}>Go</button>
<br></br>

    </div>);
}
export default Appevents;