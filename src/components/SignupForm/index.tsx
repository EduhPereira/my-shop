import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Form } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormModel {
  username: string;
  email: string;
  password: string;
}

export const SignupForm = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup
      .string()
      .required("*Campo Obrigatório")
      .min(5, "*Minimo de 5 caracteres"),
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
      .post("register", data)
      .then((_) => history.push("/"))
      .catch((e) => console.log("Erro"));
  });

  return (
    <Form onSubmit={onSubmit}>
      <div>
        <label htmlFor="username">
          Username <span>{errors.username?.message}</span>
        </label>
        <input
          {...register("username")}
          id="username"
          name="username"
          type="text"
        />
      </div>
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
      <button type="submit">signup</button>
    </Form>
  );
};
