import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Form } from "./styles";

type Profile = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm<Profile>();

  const onSubmit = handleSubmit((data) => {
    api
      .post("login", data)
      //   .then((response) => console.log(response))
      .then((_) => history.push("/dashboard"))
      .catch((e) => console.log("Erro"));
  });

  return (
    <Form onSubmit={onSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          {...register("email")}
          required
          id="email"
          name="email"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          {...register("password")}
          id="password"
          name="password"
          type="password"
        />
      </div>
      <button type="submit">login</button>
    </Form>
  );
};
