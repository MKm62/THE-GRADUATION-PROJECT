import "./professional care provider.css";
import doctor1 from "../assets/images/doctor1.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function ProfessionalCareProvider() {
  const doctors = [
    {
      id: 1,
      name: "Chris Taylor",
      specialization: "Internal Medecine",
      image: doctor1,
    },
    {
      id: 2,
      name: "Jonshon Aliven",
      specialization: "Internal Medecine",
      image: doctor1,
    },
    {
      id: 3,
      name: "Trikien Munaska",
      specialization: "Internal Medecine",
      image: doctor1,
    },
    {
      id: 4,
      name: "Khabian Jerry",
      specialization: "Internal Medecine",
      image: doctor1,
    },
    {
      id: 5,
      name: "Chris Taylor",
      specialization: "Internal Medecine",
      image: doctor1,
    },
    {
      id: 6,
      name: "Jonshon Aliven",
      specialization: "Internal Medecine",
      image: doctor1,
    },
    {
      id: 7,
      name: "Trikien Munaska",
      specialization: "Internal Medecine",
      image: doctor1,
    },
  ];
  return (
    <div className="pf-care-provider" id="professionalCareProvider">
      <div className="pf-care-provider-title">
        <h4 className="pf-care-provider-main-title">
          Professional Care Provider
        </h4>
        <h6 className="pf-care-provider-subtitle">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore fugiat
          <br />
          sunt culpa officia deserunt mollit anim est laborum.{" "}
        </h6>
      </div>
      <Container fluid className="pf-care-provider-container">
        <Row>
          {doctors.map((doctor) => {
            return (
              <Col
                key={doctor.id}
                sm={3}
                className="d-flex justify-content-center"
              >
                <Card className="pf-care-provider-frame-card">
                  <Card.Img
                    className="pf-care-provider-frame-icon"
                    variant="top"
                    src={doctor.image}
                  />
                  <Card.Body>
                    <Card.Title className="pf-care-provider-service-title">
                      {doctor.name}
                    </Card.Title>
                    <Card.Text className="pf-care-provider-service-description">
                      {doctor.specialization}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
          <Col sm={3} className="d-flex justify-content-center ">
            <Card className="pf-care-provider-join-team">
              <Card.Body>
                <Card.Title className="pf-care-provider-join-team-title">
                  Join our team
                </Card.Title>
                <Button
                  variant="light"
                  className="pf-care-provider-join-team-button"
                >
                  +
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
