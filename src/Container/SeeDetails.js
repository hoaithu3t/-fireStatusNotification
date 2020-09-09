import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const detail = {
  room: "101",
  address: "Nhà E3, số 144 Xuân Thủy, Cầu Giấy, HN",
  temperature: "28 độ C",
  humidity: "98%",
  operatingStatus: "Không cháy",
};

const SeeDetails = () => {
  return (
    <Container>
      <Row>
        <Col className="border m-2">
          <div className="p-10 font-weight-bold">
            <p>Phòng {detail.room}</p>
            <p>Địa chỉ: {detail.address}</p>
            <p>Nhiệt độ: {detail.temperature}</p>
            <p>Độ ẩm: {detail.temperature}</p>
            <p>Tình trạng hoạt động:{detail.operatingStatus}</p>
          </div>
          <br />
          <div>
            Liên hệ:
            <p>KTV: Trần Văn A</p>
            <p>Mobile : 0987667876</p>
          </div>
        </Col>
        <Col className="border m-2 d-flex justify-content-center">
          <div className="align-self-center">
            Biểu đồ nhiệt độ theo thời gian
          </div>
        </Col>
        <Col className="border m-2 d-flex justify-content-center">
          <div className="align-self-center">Biểu đồ độ ẩm theo thời gian</div>
        </Col>
      </Row>
    </Container>
  );
};

export default SeeDetails;
