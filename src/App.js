import Product from "./Product"
import Name from "./Name"
import Price from "./Price"
import Description from "./Description";
import Image from "./Image";
import { Container, Card, Row, Col } from "react-bootstrap";




function App() {
  const firstName = "Firas"
  
  const cardStyle = {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    margin: "20px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    borderRadius: "10px",
  };

  const messageStyle = {
    marginTop: "20px",
    fontSize: "20px",
  };

  const imageContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Container>
      <Card style ={cardStyle}>
        <Row>
          < Col md={4}>
            <div style = {imageContainerStyle}>
            <Image />
            </div>
          </Col>
          <Col md={8}>
            <Card.Body>
              <Name />
              <Price />
              <Description />
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <div stule={messageStyle} className="message">
        Hello,{firstName ? firstName : "there!"}
      </div>
    </Container>
  );
}

export default App;
