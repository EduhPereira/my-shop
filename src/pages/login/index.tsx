import { LoginForm } from "../../components/LoginForm";
import login from "../../assets/login-img.svg";
import { Container, Col1, Col2 } from "./styles";
import logo from "../../assets/kenzie-logo.png";
import { useHistory } from "react-router-dom";
export const Login = () => {
  const history = useHistory();
  return (
    <Container>
      <Col1>
        <img src={login} alt="" />
      </Col1>
      <Col2>
        <h1>My Shop</h1>
        <LoginForm />
        <div>
          Dont have an account yet?{" "}
          <span onClick={() => history.push("/signup")}>Signup</span>
        </div>
      </Col2>
    </Container>
  );
};
