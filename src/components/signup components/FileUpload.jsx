import { MdOutlineFileUpload } from "react-icons/md";
import styles from "./signup.module.css";
import { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { UserContext } from "../../context/Provider";

export default function FileUpload({ name }) {
  const [file, setFile] = useState(null);
  const {
    surgeriesFiles,
    setSurgeriesFiles,
    labResultsFiles,
    setLabResultsFiles,
  } = useContext(UserContext);

  function handleDrop(e) {
    e.preventDefault();
    //const droppedFile = e.dataTransfer.files[0];
    const droppedFile = Array.from(e.dataTransfer.files);
    if (name === "surgeries") {
      //setSurgeriesFiles(droppedFile);
      setSurgeriesFiles([...surgeriesFiles, ...droppedFile]);
    } else if (name === "lab results") {
      //setLabResultsFiles(droppedFile);
      setLabResultsFiles([...labResultsFiles, ...droppedFile]);
    }
  }
  function handleDragOver(e) {
    e.preventDefault();
  }
  function handleBrowse(e) {
    const browsedFiles = Array.from(e.target.files);
    if (name === "surgeries") {
      //setSurgeriesFiles(droppedFile);
      setSurgeriesFiles([...surgeriesFiles, ...browsedFiles]);
    } else if (name === "lab results") {
      //setLabResultsFiles(droppedFile);
      setLabResultsFiles([...labResultsFiles, ...browsedFiles]);
    }
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Form.Group
        className={styles.uploadFile}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <MdOutlineFileUpload className="text-primary fs-2" />
        <Form.Control type="file" multiple hidden></Form.Control>
        <Form.Label>Drag your file here</Form.Label>
        {console.log(
          "Surgeries files:",
          surgeriesFiles,
          "Lab results files: ",
          labResultsFiles
        )}
      </Form.Group>

      <p className="align-self-center justify-self-center">Or</p>

      <Form.Group>
        <Form.Control
          type="file"
          multiple
          onChange={(e) => {
            handleBrowse(e);
          }}
        ></Form.Control>
        {console.log(
          "Surgeries files:",
          surgeriesFiles,
          "Lab results files: ",
          labResultsFiles
        )}
      </Form.Group>
    </div>
  );
}
