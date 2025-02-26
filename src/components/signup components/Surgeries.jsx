import { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import { UserContext } from "../../context/Provider";
import Button from "react-bootstrap/Button";
import FileUpload from "./FileUpload";

export default function Surgeries() {
  const { surgeries, setSurgeries } = useContext(UserContext);

  // Default: One empty input in array
  const [numSurgeries, setNumSurgeries] = useState(1);

  return (
    <Form.Group className="mb-3">
      <Form.Text className="d-flex flex-row justify-content-between mb-3">
        <span className="fs-5 fw-bold text-dark">
          Please list any surgeries you have had before in the following format:
          (e.g., Appendectomy - 01/2020 - City General Hospital)
        </span>
        <span>
          <Button
            style={{ borderRadius: "30px" }}
            variant="primary"
            onClick={() => {
              setNumSurgeries(numSurgeries + 1);
              setSurgeries((prev) => [...prev, ""]); // Add empty string for new input
            }}
          >
            +
          </Button>
        </span>
      </Form.Text>

      {/* Mapping through Surgeries */}
      {Array(numSurgeries)
        .fill(null)
        .map((_, i) => (
          <Form.Group className="d-flex flex-row mb-3" key={i}>
            <Form.Control
              type="text"
              placeholder="(e.g., Appendectomy - 01/2020 - City General Hospital)"
              value={surgeries[i] || ""} // Make sure it doesn't break
              onChange={(e) => {
                setSurgeries((prev) => {
                  const updatedSurgeries = [...prev];
                  updatedSurgeries[i] = e.target.value; // Update only this index
                  return updatedSurgeries;
                });
              }}
            />
          </Form.Group>
        ))}

      {/* Debugging Output */}
      {console.log("Surgeries Array:", surgeries)}

      <FileUpload name={"surgeries"} />
    </Form.Group>
  );
}
