import FormSignup2 from "../components/signup components/FormSignup2";
import SignupHeader from "../components/signup components/SignupHeader";
export default function SignupPage2() {
  return (
    <div className="d-flex flex-column">
      <SignupHeader backTo="/signup1" />
      <div
        className="d-flex flex-column justify-content-start mb-5"
        style={{ marginLeft: "15%" }}
      >
        <h2>Personal health information (PHI)</h2>
      </div>
      <FormSignup2 />
    </div>
  );
}
