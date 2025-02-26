import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";
import { UserContext } from "../../context/Provider";
export default function Diagnosis() {
  const { diagnosis, setDiagnosis } = useContext(UserContext);
  const [numDiagnosis, setNumDiagnosis] = useState(1);
  return (
    <Form.Group className="mb-3">
      <Form.Text className="d-flex flex-row justify-content-between mb-3">
        <span className="fs-4 fw-bold text-dark">Diagnosis</span>
        <span>
          <Button
            onClick={() => {
              setNumDiagnosis(numDiagnosis + 1);
            }}
            style={{ borderRadius: "30px" }}
            variant="primary"
          >
            +
          </Button>
        </span>
      </Form.Text>

      <Form.Select
        onChange={(e) => {
          setDiagnosis([...diagnosis, e.target.value]);
        }}
        className="mb-3"
      >
        <option value="none">
          Enter any diagnoses you have received (e.g., diabetes...).
        </option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      {numDiagnosis > 1
        ? Array(numDiagnosis - 1)
            .fill(null)
            .map((_, i) => (
              <Form.Select
                onChange={(e) => {
                  setDiagnosis([...diagnosis, e.target.value]);
                }}
                key={i}
                className="mb-3"
              >
                <option value="none">
                  Enter any diagnoses you have received (e.g., diabetes...).
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            ))
        : ""}
      {console.log(diagnosis)}
    </Form.Group>
  );
}
