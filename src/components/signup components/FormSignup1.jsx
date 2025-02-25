import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./signup.module.css";
import { useContext, useState } from "react";
import { UserContext } from "../../context/Provider";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function FormSignup1() {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    address,
    setAddress,
    nationalNumber,
    setNationalNumber,
    fatherNationalNumber,
    setFatherNationalNumber,
    motherNationalNumber,
    setMotherNationalNumber,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  } = useContext(UserContext);
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [hiddenConfirmPassword, setHiddenConfirmPassword] = useState(true);
  const navigate = useNavigate();
  function hidePassword() {
    if (hiddenPassword === false) {
      setHiddenPassword(true);
    } else {
      setHiddenPassword(false);
    }
  }
  function hideConfirmPassword() {
    if (hiddenConfirmPassword === false) {
      setHiddenConfirmPassword(true);
    } else {
      setHiddenConfirmPassword(false);
    }
  }
  function handleSubmitForm(e) {
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    if (password !== confirmPassword) {
      e.preventDefault();
      alert("Wrong password confrimation !");
    } else if (!(hasLetter && hasDigit && hasSymbol)) {
      e.preventDefault();
      alert(
        "Weak password ! Please make sure that you password contains 8 or more characters with a mix of letters, numbers & symbols "
      );
    } else {
      e.preventDefault();
      console.log("Sign in 1 successfully");
      navigate("/signup2");
    }
  }
  return (
    <Form onSubmit={handleSubmitForm} className="d-flex flex-column mx-4">
      <div className="d-flex flex-md-row flex-column justify-content-evenly align-items-md-start align-items-center gap-md-5 gap-1">
        <div className="d-flex flex-column">
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              required
              className={styles.inputBox}
            >
              {console.log(firstName)}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              value={lastName}
              placeholder="Last name"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              required
              className={styles.inputBox}
            >
              {console.log(lastName)}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Email@email.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              className={styles.inputBox}
            >
              {console.log(email)}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              value={phoneNumber}
              placeholder="Phone number"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              maxLength={11}
              minLength={7}
              required
              className={styles.inputBox}
            >
              {console.log(phoneNumber)}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 mt-md-4">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              value={address}
              placeholder="Address"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              required
              className={styles.inputBox}
            >
              {console.log(address)}
            </Form.Control>
          </Form.Group>
        </div>
        <div className="d-flex flex-column">
          <Form.Group className="mb-3">
            <Form.Label>National Number</Form.Label>
            <Form.Control
              type="number"
              value={nationalNumber}
              placeholder="National Number"
              size={14}
              onChange={(e) => {
                setNationalNumber(e.target.value);
              }}
              required
              className={styles.inputBox}
            >
              {console.log(nationalNumber)}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Father’s National Number(optional)</Form.Label>
            <Form.Control
              type="number"
              value={fatherNationalNumber}
              placeholder="Father’s National Number"
              onChange={(e) => {
                setFatherNationalNumber(e.target.value);
              }}
              maxLength={14}
              minLength={14}
              className={styles.inputBox}
            >
              {console.log(fatherNationalNumber)}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mother’s National Number(optional) </Form.Label>
            <Form.Control
              type="number"
              value={motherNationalNumber}
              placeholder="Mother’s National Number"
              onChange={(e) => {
                setMotherNationalNumber(e.target.value);
              }}
              maxLength={14}
              minLength={14}
              className={styles.inputBox}
            >
              {console.log(motherNationalNumber)}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="d-flex flex-row justify-content-between">
              <span>Password</span>
              <span>
                <FaEyeSlash
                  style={{ cursor: "pointer" }}
                  onClick={hidePassword}
                />
              </span>
            </Form.Label>
            <Form.Control
              type={hiddenPassword ? "password" : "text"}
              value={password}
              placeholder="Password"
              minLength={8}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              className={styles.inputBox}
            >
              {console.log(password)}
            </Form.Control>
            <Form.Text className="text-muted" style={{ fontSize: "10px" }}>
              Use 8 or more characters with a mix of letters, numbers & symbols
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="d-flex flex-row justify-content-between">
              <span>Confirm Password</span>

              <span>
                <FaEyeSlash
                  style={{ cursor: "pointer" }}
                  onClick={hideConfirmPassword}
                />
              </span>
            </Form.Label>{" "}
            <Form.Control
              type={hiddenConfirmPassword ? "password" : "text"}
              value={confirmPassword}
              placeholder="Confirm password"
              minLength={8}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              required
              className={styles.inputBox}
            >
              {console.log(confirmPassword)}
            </Form.Control>
          </Form.Group>
        </div>
      </div>

      <Button
        variant="primary"
        type="submit"
        className="align-self-center px-5 py-2"
      >
        Continue
      </Button>
    </Form>
  );
}
