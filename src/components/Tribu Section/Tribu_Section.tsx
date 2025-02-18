import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./Tribu_Section.css";

const Tribu_Section = () => {
  return (
    <div className="mx-3">
      <h1 className="m-4">Esta es nuestra Tribu</h1>
      <h2> Patriarcas </h2>
        <p>
          Son los encargados de no sólo sobrevivió 500 años, sino que tambien
          ingresó como texto de relleno en documentos electrónicos, quedando
          esencialmente igual al original.
        </p>
      <CardGroup className="m-4">        
        <Card>
          <Card.Img variant="top" src="/src/assets/header_img.jpg" />
          <Card.Body className="w-1">
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="/src/assets/header_img.jpg" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="/src/assets/header_img.jpg" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      <h2> Shamanes </h2>
      <p>
        {" "}
        Son los encargados de no sólo sobrevivió 500 años, sino que tambien
        ingresó como texto de relleno en documentos electrónicos, quedando
        esencialmente igual al original.
      </p>
      <CardGroup className="m-4">
        <Card>
          <Card.Img variant="top" src="/src/assets/header_img.jpg" />
          <Card.Body className="w-1">
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="/src/assets/header_img.jpg" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="/src/assets/header_img.jpg" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};
export default Tribu_Section;
