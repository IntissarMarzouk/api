import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Cards(props){
    return(
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.peerbits.com/static/fc598597fa464f52805c88acc3a29061/189bc/the-benefits-of-reactjs-main.jpg" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.texte}
        </Card.Text>
        <Button variant="primary">{props.label}</Button>
      </Card.Body>
    </Card>
    );
}
export default Cards;