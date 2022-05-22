import React, { useEffect } from "react";
import {
  ErrorMessage,
  LoginButton,
  LoginContainer,
  LoginForm,
  LoginGroup,
  LoginHeading,
  LoginInput,
  LoginSection,
  LoginWrapper,
} from "./LoginStyles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { BsFillPersonFill, BsFillLockFill } from "react-icons/bs";
import { login } from "../../redux/actions/auth";
import { useSelector } from "react-redux";

const Login = () => {
  const { user, isLoading } = useSelector((state) => state);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (user) => {
    login(user);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <LoginSection>
      <LoginContainer>
        <LoginWrapper>
          <LoginForm onSubmit={handleSubmit(onSubmit)}>
            <LoginHeading>Admin Girişi</LoginHeading>
            <LoginGroup>
              <BsFillPersonFill />
              <LoginInput
                placeholder="E-mail"
                type="text"
                {...register("email")}
              />
            </LoginGroup>
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}

            <LoginGroup>
              <BsFillLockFill />
              <LoginInput
                placeholder="Password"
                type="password"
                s
                {...register("password")}
              />
            </LoginGroup>
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}

            <LoginButton type="submit">Giriş Yap</LoginButton>
          </LoginForm>
        </LoginWrapper>
      </LoginContainer>
    </LoginSection>
  );
};

export default Login;
