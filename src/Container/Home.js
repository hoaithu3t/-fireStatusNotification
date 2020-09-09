import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const seeDetails = () => {
    console.log("haha");
    history.push("/seeDetails");
  };
  return (
    <Container>
      <Row>
        <Col
          className="border border-success m-5 text-center py-1"
          onClick={seeDetails}
        >
          <div className="text-success">P.101</div>
          <div className="text-danger">28 độ C</div>
          <div>98% H</div>
        </Col>
        <Col className="border border-success m-5 text-center py-1">
          <div className="text-success">P.101</div>
          <div className="text-danger">28 độ C</div>
          <div>98% H</div>
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Home;
