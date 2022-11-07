import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import classNames from "classnames";

type FormState = {
  email: string;
  password: string;
};

const schema = object({
  email: string().email("Insira um email válido.").required("Insira um email"),
  password: string().required("Insira uma senha"),
});

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormState) => {
    console.log(data);
    window.location.href = "https://google.com";
  };

  const inputClassName = classNames(
    "input",
    errors?.email?.message && "border-pink-500 text-pink-600"
  );

  return (
    <div
      className="flex w-full h-full bg-white"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full px-4 pt-24 lg:pt-0 lg:px-0 lg:w-1/2 h-full flex lg:items-center justify-center">
        <div className="flex flex-col">
          <h1 className="mb-4 text-5xl">Fazer login</h1>
          <p className="mb-10 text-lg text-slate-500">
            Seja bem-vindo! Insira seus dados para fazer login.
          </p>
          <form>
            <div className="flex flex-col mb-5">
              <label htmlFor="email" className="text-base mb-1 text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className={inputClassName}
                {...register("email")}
              />

              {errors?.email?.message && (
                <p className="text-sm text-pink-600 mt-1">
                  {errors?.email?.message}
                </p>
              )}
            </div>

            <div className="flex flex-col mb-10">
              <label htmlFor="email" className="text-base mb-1 text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="input"
                {...register("password")}
              />
            </div>

            <button type="submit" className="btn-submit">
              Entrar
            </button>
          </form>
        </div>
      </div>
      <div
        className="hidden lg:flex w-1/2 h-full bg-blue-700 bg-cover bg-left"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1507552/pexels-photo-1507552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      ></div>
    </div>
  );
};

export default App;
