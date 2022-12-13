import { useState } from "react";
function Rgba(){
    const [redColor,setRedColor]=useState(0)
    const [greenColor,setGreenColor]=useState(0)
    const [blueColor,setBlueColor]=useState(0)
    const [alphaColor,setAlphaColor]=useState(1)
    

    return(
        <div
        style={{
            width:"25vw",
            height:'300px',
            marginInline:'auto'
        }}
        >
<div
style={{
    width:"50vw",
    height:'30vw',
    border:"2px dashed gray",
    backgroundColor:`rgba(${redColor},${greenColor},${blueColor},${alphaColor})`
}}
>


</div>
<input 
type="range"
min="0"
max="255"
step={1}
style={{width:'100%',accentColor:'red'}}
value={redColor}
onChange={(event)=>{
    setRedColor(event.target.value)}}
/>
<input 
type="range"
min="0"
max="255"
step={1}
style={{width:'100%',accentColor:'green'}}
value={greenColor}
onChange={(event)=>{
    setGreenColor(event.target.value)}}
/>
<input 
type="range"
min="0"
max="255"
step={1}
style={{width:'100%',accentColor:'blue'}}
value={blueColor}
onChange={(event)=>{
    setBlueColor(event.target.value)}}
/>
<input 
type="range"
min="0"
max="1"
step={0.001}
style={{width:'100%',accentColor:'gray'}}
value={alphaColor}
onChange={(event)=>{
    setAlphaColor(event.target.value)}}
/>

        </div>
    )
};
export default Rgba;