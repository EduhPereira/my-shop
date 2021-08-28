import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Form } from "./styles";

type FormModel = {
  username: string;
  email: string;
  password: string;
};

export const SignupForm = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm<FormModel>();

  const onSubmit = handleSubmit((data) => {
    api
      .post("register", data)
      //   .then((response) => console.log(response))
      .then((_) => history.push("/login"))
      .catch((e) => console.log("Erro"));
  });

  return (
    <Form onSubmit={onSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          {...register("username")}
          required
          id="username"
          name="username"
          type="text"
        />
      </div>
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
          required
          id="password"
          name="password"
          type="password"
        />
      </div>
      <button type="submit">signup</button>
    </Form>
  );
};
