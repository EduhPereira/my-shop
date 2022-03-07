import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Form } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUser } from "../../providers/userProvider";
import { toast } from "react-toastify";

interface FormModel {
  username: string;
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { setIsLogged } = useUser();

  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("*Email Inválido").required("*Campo obrigatório"),
    password: yup.string().required("*Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormModel>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    api
      .post("login", data)
      .then((response) =>
        localStorage.setItem("token", JSON.stringify(response.data.accessToken))
      )
      .then((_) => setIsLogged(true))
      .then((_) => history.push("/dashboard"))
      .catch((e) => toast.error("incorrect Email and/or Password"));
  });

  return (
    <Form onSubmit={onSubmit}>
      <div>
        <label htmlFor="email">
          Email <span>{errors.email?.message}</span>
        </label>
        <input {...register("email")} id="email" name="email" type="text" />
      </div>
      <div>
        <label htmlFor="password">
          Password <span>{errors.password?.message}</span>
        </label>
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
