import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./signup.module.css";
import { useContext, useState } from "react";
import { UserContext } from "../../context/Provider";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BloodType from "./BloodType";
import RobotCheck from "./RobotCheck";

export default function FormSignup2() {
  const {
    gender,
    setGender,
    birthDate,
    setBirthDate,
    age,
    setAge,
    height,
    setHeight,
    weight,
    setWeight,
    foodAllergies,
    setFoodAllergies,
    fatherHereditaryDiseases,
    setFatherHereditaryDiseases,
    motherHereditaryDiseases,
    setMotherHereditaryDiseases,
    bloodType,
    setBloodType,
  } = useContext(UserContext);
  const navigate = useNavigate();
  function handleSubmitSignup2(e) {
    e.preventDefault();
    console.log("Sign in 2 successfully");
    navigate("/signup3");
  }
  return (
    <Form onSubmit={handleSubmitSignup2} className="d-flex flex-column mx-4">
      <div className="d-flex flex-md-row flex-column justify-content-evenly align-items-md-start align-items-center gap-md-5 gap-1">
        <div className="d-flex flex-column">
          <Form.Group className="mb-3">
            <Form.Label>Gender</Form.Label>
            <Form.Select
              required
              onChange={(e) => {
                setGender(e.target.value);
              }}
              className={styles.inputBox}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              {console.log(gender)}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Birth Date</Form.Label>
            <Form.Control
              type="date"
              required
              onChange={(e) => {
                setBirthDate(e.target.value);
              }}
              className={styles.inputBox}
            >
              {console.log(birthDate)}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Age"
              max={120}
              required
              onChange={(e) => {
                setAge(e.target.value);
              }}
              className={styles.inputBox}
            >
              {console.log(age)}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Height</Form.Label>
            <Form.Control
              type="number"
              placeholder="ex: 160cm"
              min={24}
              max={272}
              required
              onChange={(e) => {
                setHeight(e.target.value);
              }}
              className={styles.inputBox}
            >
              {console.log(height)}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Weight</Form.Label>
            <Form.Control
              type="number"
              placeholder="ex: 50kg"
              max={640}
              required
              onChange={(e) => {
                setWeight(e.target.value);
              }}
              className={styles.inputBox}
            >
              {console.log(weight)}
            </Form.Control>
          </Form.Group>
        </div>
        <div className="d-flex flex-column">
          <Form.Group className="mb-3">
            <Form.Label>Do you have any food Drug/Allergies?</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Mention here"
              onChange={(e) => {
                setFoodAllergies(e.target.value);
              }}
              className={styles.inputBox}
            >
              {console.log(foodAllergies)}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Father's Hereditary Diseases(optional)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Mention here"
              onChange={(e) => {
                setFatherHereditaryDiseases(e.target.value);
              }}
              className={styles.inputBox}
            >
              {console.log(fatherHereditaryDiseases)}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mother's Hereditary Diseases(optional)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Mention here"
              onChange={(e) => {
                setMotherHereditaryDiseases(e.target.value);
              }}
              className={styles.inputBox}
            >
              {console.log(motherHereditaryDiseases)}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Blood Group</Form.Label>
            <BloodType />
          </Form.Group>
        </div>
      </div>
      <div style={{ color: "gray", alignSelf: "center", fontSize: "11px" }}>
        By creating an account, you agree to our
        <span style={{ color: "black", cursor: "pointer" }}>
          {" "}
          Terms of use{" "}
        </span>
        and
        <span style={{ color: "black", cursor: "pointer" }}>
          {" "}
          Privacy Policy{" "}
        </span>
      </div>
      <RobotCheck />

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
