import { propTypes } from "react-bootstrap/esm/Image";

function Button(props){
    return(
        <button 
        type={props.type} 
        onClick={props.onClick} 
        className={props.className}>
            {props.label}
        </button>
    );
}
export default Button;