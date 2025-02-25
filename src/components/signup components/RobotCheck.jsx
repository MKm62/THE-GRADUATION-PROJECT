import Form from "react-bootstrap/Form";
import googleRecaptcha from "../../assets/images/google_recaptcha-official.png";
import styles from "./signup.module.css";

export default function RobotCheck() {
  return (
    <div className={styles.robotCheckContainer}>
      <Form.Check
        inline
        required
        label="I’m not a robot"
        name="group1"
        type="checkbox"
      />
      <img style={{ width: "20%" }} src={googleRecaptcha} />
    </div>
  );
}
