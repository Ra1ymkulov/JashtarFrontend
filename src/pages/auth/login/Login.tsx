"use client";
import Image from "next/image";
import scss from "./Login.module.scss";
import { FiUser } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { RiEyeOffLine } from "react-icons/ri";
import { RiEyeLine } from "react-icons/ri";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/src/shared/ui/button/Button";

const Login = () => {
  const [passwordEye, setPasswordEye] = useState<boolean>(false);
  return (
    <div className={scss.authSection}>
      <div className={scss.content}>
        <h1>С возвращением!</h1>
        <div className={scss.inputContainer}>
          <p>Email</p>
          <div className={scss.input}>
            <AiOutlineMail />
            <input type="text" />
          </div>
        </div>
        <div className={scss.inputContainer}>
          <p>Пароль</p>
          <div className={scss.input}>
            <input type={passwordEye ? "text" : "password"} />
            <p onClick={() => setPasswordEye(!passwordEye)}>
              {passwordEye ? <RiEyeLine /> : <RiEyeOffLine />}
            </p>
          </div>
          <Link href={"/"}>Забыли пароль?</Link>
        </div>
        <div className={scss.button}>
          <Button text="Продолжить" variant={"primary"} />
        </div>
        <div className={scss.register}>
          <p>Нет аккаунта?</p>
          <Link href={"/register"}>Регистрация</Link>
        </div>
      </div>
      <div className={scss.rightImage}>
        <Image alt="/image.auth.page.svg" src="/image.auth.page.svg" fill />
      </div>
    </div>
  );
};

export default Login;
