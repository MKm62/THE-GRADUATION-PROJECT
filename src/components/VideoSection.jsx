import "./videoSection.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import VideoImage from "../assets/images/Video Section Image.png";

export default function VideoSection() {
  return (
    <Container fluid className="video-section-container" id="videoSection">
      <Row className="video-section-row">
        <Col sm={12} md={6} lg={6} className="video-section-left">
          <p className="video-section-title">Manage your health care</p>
          <p className="video-section-content">
            Trust us to be there <br />
            to help all and make <br />
            things weel again.
          </p>
          <Button className="video-section-button" variant="primary">
            All Doctors &rarr;
          </Button>
        </Col>
        <Col>
          <img
            className="video-section-image"
            src={VideoImage}
            alt="Video Section icon"
          />
        </Col>
      </Row>
      <Button className="video-section-play-button">&#11208;</Button>
    </Container>
  );
}
