import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";
import { UserContext } from "../../context/Provider";
import { useNavigate } from "react-router-dom";
import FileUpload from "./FileUpload";
export default function LabResults() {
  const { labResults, setLabResults, labResultsFiles, setLabResultsFiles } =
    useContext(UserContext);
  const [numLabResults, setNumLabResults] = useState(1);
  return (
    <Form.Group className="mb-3">
      <Form.Text className="d-flex flex-row justify-content-between">
        <span className="fs-4 fw-bold text-dark">Lab Results</span>
        <span>
          <Button
            style={{ borderRadius: "30px" }}
            variant="primary"
            onClick={() => {
              setNumLabResults(numLabResults + 1);
            }}
          >
            +
          </Button>
        </span>
      </Form.Text>
      <Form.Text className="text-dark fs-6 mb-5">
        If you have any documents or proof of lab results you have undergone,
        please provide them here
      </Form.Text>
      <FileUpload name={"lab results"} />

      {
        //numLabResults > 1
        //? Array(numLabResults - 1)
        //  .fill(null)
        //.map((_, i) => <FileUpload key={i} />)
        //  : ""
      }

      {console.log(labResults)}
    </Form.Group>
  );
}
