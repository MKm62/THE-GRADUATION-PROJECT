import { createContext, useState } from "react";

export const UserContext = createContext();

export default function Provider({ children }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [nationalNumber, setNationalNumber] = useState("");
  const [fatherNationalNumber, setFatherNationalNumber] = useState("");
  const [motherNationalNumber, setMotherNationalNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [foodAllergies, setFoodAllergies] = useState("");
  const [fatherHereditaryDiseases, setFatherHereditaryDiseases] = useState("");
  const [motherHereditaryDiseases, setMotherHereditaryDiseases] = useState("");
  const [bloodType, setBloodType] = useState("");

  return (
    <UserContext.Provider
      value={{
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
