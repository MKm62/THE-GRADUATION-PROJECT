import Form from "react-bootstrap/Form";
import styles from "./signup.module.css";
import { BiSolidDroplet } from "react-icons/bi";
import { useContext } from "react";
import { UserContext } from "../../context/Provider";

export default function BloodType() {
  const { bloodType, setBloodType } = useContext(UserContext);
  return (
    <div className={styles.bloodTypesContainer}>
      <Form.Check
        name="bloodType"
        type="radio"
        id={`A+`}
        required
        onChange={(e) => {
          setBloodType(e.target.id);
        }}
        label={
          <div
            className={styles.bloodTypeContainer}
            style={{ cursor: "pointer" }}
          >
            <BiSolidDroplet className="text-primary fs-1" />
            <p
              className="position-absolute text-light"
              style={{ top: "20%", left: "25%" }}
            >
              A+
            </p>
          </div>
        }
      ></Form.Check>
      <Form.Check
        name="bloodType"
        type="radio"
        id={`A-`}
        required
        onChange={(e) => {
          setBloodType(e.target.id);
        }}
        label={
          <div
            className={styles.bloodTypeContainer}
            style={{ cursor: "pointer" }}
          >
            <BiSolidDroplet className="text-primary fs-1" />
            <p
              className="position-absolute text-light"
              style={{ top: "20%", left: "25%" }}
            >
              A-
            </p>
          </div>
        }
      ></Form.Check>
      <Form.Check
        name="bloodType"
        type="radio"
        id={`B+`}
        required
        onChange={(e) => {
          setBloodType(e.target.id);
        }}
        label={
          <div
            className={styles.bloodTypeContainer}
            style={{ cursor: "pointer" }}
          >
            <BiSolidDroplet className="text-primary fs-1" />
            <p
              className="position-absolute text-light"
              style={{ top: "20%", left: "25%" }}
            >
              B+
            </p>
          </div>
        }
      ></Form.Check>{" "}
      <Form.Check
        name="bloodType"
        type="radio"
        id={`B-`}
        required
        onChange={(e) => {
          setBloodType(e.target.id);
        }}
        label={
          <div
            className={styles.bloodTypeContainer}
            style={{ cursor: "pointer" }}
          >
            <BiSolidDroplet className="text-primary fs-1" />
            <p
              className="position-absolute text-light"
              style={{ top: "20%", left: "25%" }}
            >
              B-
            </p>
          </div>
        }
      ></Form.Check>{" "}
      <Form.Check
        name="bloodType"
        type="radio"
        id={`AB+`}
        required
        onChange={(e) => {
          setBloodType(e.target.id);
        }}
        label={
          <div
            className={styles.bloodTypeContainer}
            style={{ cursor: "pointer" }}
          >
            <BiSolidDroplet className="text-primary fs-1" />
            <p
              className="position-absolute text-light"
              style={{ top: "20%", left: "25%" }}
            >
              AB+
            </p>
          </div>
        }
      ></Form.Check>{" "}
      <Form.Check
        name="bloodType"
        type="radio"
        id={`AB-`}
        required
        onChange={(e) => {
          setBloodType(e.target.id);
        }}
        label={
          <div
            className={styles.bloodTypeContainer}
            style={{ cursor: "pointer" }}
          >
            <BiSolidDroplet className="text-primary fs-1" />
            <p
              className="position-absolute text-light"
              style={{ top: "20%", left: "25%" }}
            >
              AB-
            </p>
          </div>
        }
      ></Form.Check>
      <Form.Check
        name="bloodType"
        type="radio"
        id={`O+`}
        required
        onChange={(e) => {
          setBloodType(e.target.id);
        }}
        label={
          <div
            className={styles.bloodTypeContainer}
            style={{ cursor: "pointer" }}
          >
            <BiSolidDroplet className="text-primary fs-1" />
            <p
              className="position-absolute text-light"
              style={{ top: "20%", left: "25%" }}
            >
              O+
            </p>
          </div>
        }
      ></Form.Check>{" "}
      <Form.Check
        name="bloodType"
        type="radio"
        id={`O-`}
        required
        onChange={(e) => {
          setBloodType(e.target.id);
        }}
        label={
          <div
            className={styles.bloodTypeContainer}
            style={{ cursor: "pointer" }}
          >
            <BiSolidDroplet className="text-primary fs-1" />
            <p
              className="position-absolute text-light"
              style={{ top: "20%", left: "25%" }}
            >
              O-
            </p>
          </div>
        }
      ></Form.Check>
      {console.log("bloodType: ", bloodType)}
    </div>
  );
}
