import Button from "react-bootstrap/Button";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function SignupHeader({ backTo }) {
  const navigate = useNavigate();
  function handleBackButton() {
    navigate(backTo);
  }
  return (
    <div className="mt-3 align-self-center" style={{ width: "90%" }}>
      <Button
        variant="outline-primary"
        className="border-0"
        onClick={handleBackButton}
      >
        <IoMdArrowBack />
        Back
      </Button>
      <hr />
    </div>
  );
}
