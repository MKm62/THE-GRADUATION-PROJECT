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
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
