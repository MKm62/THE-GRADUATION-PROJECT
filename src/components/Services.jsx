import "./services.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import consultationIcon from "../assets/images/Consultation frame.png";
import TrackingIcon from "../assets/images/Tracking frame.png";
import SearchDoctorIcon from "../assets/images/Search doctor frame.png";
import SearchDoctorVector from "../assets/images/Search doctor vector.png";
import EducationalContentIcon from "../assets/images/Educational Content frame.png";
import PrescriptionManagmentIcon from "../assets/images/Prescription Management frame.png";
import PillTimeReminderIcon from "../assets/images/Pill Time Reminder frame.png";
import VideoSection from "./VideoSection";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Consultation",
      description:
        "Reserve a consultation with our trusted doctors and get the best recomendations",
      icon: consultationIcon,
    },
    {
      id: 2,
      title: "Tracking",
      description: "Track and save your medical history and health data ",
      icon: TrackingIcon,
    },
    {
      id: 3,
      title: "Search Doctor",
      description:
        "Choose your doctor from thousands of specialist, general, and trusted hospitals",
      icon: SearchDoctorIcon,
    },
    {
      id: 4,
      title: "Educational Content",
      description:
        "Access reliable information and tips to manage your condition effectively.",
      icon: EducationalContentIcon,
    },
    {
      id: 5,
      title: "Prescription Management",
      description:
        "Access reliable information and tips to manage your condition effectively.",
      icon: PrescriptionManagmentIcon,
    },
    {
      id: 6,
      title: "Pill Time Reminder",
      description:
        "Get notified when it’s time to take your medications and stay on track with your treatment.",
      icon: PillTimeReminderIcon,
    },
  ];
  return (
    <>
      <div className="services-section" id="services">
        <div className="services-section-title">
          <h4 className="services-section-main-title">Our Services</h4>
          <h6 className="services-section-subtitle">
            We provide the best choices for you.
          </h6>
        </div>
        <Container fluid className="services-container">
          <Row>
            {services.map((service) => {
              return (
                <Col
                  key={service.id}
                  sm={12}
                  md={6}
                  lg={4}
                  className="d-flex justify-content-center"
                >
                  <Card
                    className="services-section-frame-card"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img
                      className="services-section-frame-icon"
                      variant="top"
                      src={service.icon}
                    />
                    <Card.Body>
                      <Card.Title className="services-section-service-title">
                        {service.title}
                      </Card.Title>
                      <Card.Text className="services-section-service-description">
                        {service.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <VideoSection />
    </>
  );
}
