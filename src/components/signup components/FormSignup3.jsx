import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./signup.module.css";
import { useContext, useState } from "react";
import { UserContext } from "../../context/Provider";
import { useNavigate } from "react-router-dom";
import Surgeries from "./Surgeries";
import Diagnosis from "./Diagnosis";
import LabResults from "./LabResults";

export default function FormSignup3() {
  const {
    diagnosis,
    setDiagnosis,
    surgeries,
    setSurgeries,
    labResults,
    setLabResults,
    surgeriesFiles,
    setSurgeriesFiles,
    labResultsFiles,
    setLabResultsFiles,
  } = useContext(UserContext);
  const [numDiagnosis, setNumDiagnosis] = useState(1);
  const [numSurgeries, setNumSurgeries] = useState(1);

  const navigate = useNavigate();
  function handleSubmitSignup2(e) {
    e.preventDefault();
    console.log("Sign in 3 successfully");
    //navigate("/");
  }
  return (
    <Form onSubmit={handleSubmitSignup2} className="d-flex flex-column mx-4">
      <div className="d-flex flex-md-row flex-column justify-content-evenly align-items-md-start align-items-center gap-md-5 gap-1">
        <div className="d-flex flex-column" style={{ flex: "1" }}>
          <Diagnosis />
          <Surgeries />
        </div>
        <div className="d-flex flex-column " style={{ flex: "1" }}>
          <LabResults />
        </div>
      </div>

      <div className="d-flex flex-row gap-2 align-self-center">
        <Button
          variant="primary"
          type="submit"
          className="align-self-center px-5 py-2"
        >
          Create Account
        </Button>
        <Button
          variant="primary"
          className="align-self-center px-5 py-2"
          onClick={() => {
            //navigate("/");
          }}
        >
          Skip
        </Button>
      </div>
    </Form>
  );
}
