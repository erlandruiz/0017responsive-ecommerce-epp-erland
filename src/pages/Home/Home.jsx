import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import producto from "../../assets/producto.jpg";

import "./Home.scss";
export const Home = () => {
  return (
    <>
      <section className="epp-home-section">
        <Card className="epp-card">
          <Card.Img variant="top" src={producto} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="dark" size="lg" active>Consultar disponibilidad </Button>
          </Card.Body>
        </Card>
        <Card className="epp-card">
          <Card.Img variant="top" src={producto} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="dark" size="lg" active>Consultar disponibilidad </Button>
          </Card.Body>
        </Card>
        <Card className="epp-card">
          <Card.Img variant="top" src={producto} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="dark" size="lg" active>Consultar disponibilidad </Button>
          </Card.Body>
        </Card>
   
    
      
        
 

      </section>
    </>
  );
};
