import FormSignup3 from "../components/signup components/FormSignup3";
import SignupHeader from "../components/signup components/SignupHeader";

export default function SignupPage3() {
  return (
    <div className="d-flex flex-column">
      <SignupHeader backTo="/signup2" />
      <div
        className="d-flex flex-column justify-content-start mb-5"
        style={{ marginLeft: "15%" }}
      >
        <h2>Optional Information</h2>
      </div>
      <FormSignup3 />
    </div>
  );
}
