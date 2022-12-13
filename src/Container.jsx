import { getRoles } from "@testing-library/react";
import { Button} from 'react-bootstrap';
import Cards from './Cards';
function Container(){
    let design={color:'green', backgroundColor:'black',padding:'10px'};
    return (
    <div style={design}>
        <>
      <Button variant="primary" size="lg" disabled>
        Primary button
      </Button>{' '}
      <Button variant="secondary" size="lg" disabled>
        Button
      </Button>{' '}
      <Button href="#" variant="secondary" size="lg" disabled>
        Link
      </Button>
      </>
      <div className="cardsContainer">
<Cards /><Cards /><Cards /></div>

    </div>)
}
export default Container;