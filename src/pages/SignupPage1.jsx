import FormSignup1 from "../components/signup components/FormSignup1";
import SignupHeader from "../components/signup components/SignupHeader";

export default function SignupPage1() {
  return (
    <div className="d-flex flex-column">
      <SignupHeader backTo="/" />
      <div
        className="d-flex flex-column justify-content-start mb-5"
        style={{ marginLeft: "15%" }}
      >
        <h2>Create an account</h2>
        <p className="fs-6">
          Already have an ccount?
          <span className="text-primary " style={{ cursor: "pointer" }}>
            {" "}
            Log in
          </span>
        </p>
      </div>
      <FormSignup1 />
    </div>
  );
}
