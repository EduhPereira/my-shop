import { SignupForm } from "../../components/SignupForm";
import signup from "../../assets/signup-img.svg";
import { Container, Col1, Col2 } from "./styles";
import logo from "../../assets/kenzie-logo.png";
import { useHistory } from "react-router-dom";
export const Signup = () => {
  const history = useHistory();
  return (
    <Container>
      <Col1>
        <img src={signup} alt="" />
      </Col1>
      <Col2>
        <img src={logo} alt="" />
        <h1>Kenzie Shop</h1>
        <SignupForm />
        <div>
          Already have an account?{" "}
          <span onClick={() => history.push("/")}>Login</span>
        </div>
      </Col2>
    </Container>
  );
};
