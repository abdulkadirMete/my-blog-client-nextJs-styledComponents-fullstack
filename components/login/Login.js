import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { BsFillLockFill, BsFillPersonFill } from "react-icons/bs";
import * as yup from "yup";
import { login } from "../../app/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
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

const Login = () => {
  const { user, isLoading, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      console.log(user);
    } else {
      console.log(error);
    }
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

  const onSubmit = (userInfo) => {
    console.log("click");
    dispatch(login(userInfo));
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
