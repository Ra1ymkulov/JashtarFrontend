"use client";
import Image from "next/image";
import scss from "./Register.module.scss";
import { useRouter } from "next/navigation";
import { FiUser } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { RiEyeOffLine } from "react-icons/ri";
import { RiEyeLine } from "react-icons/ri";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/src/shared/ui/button/Button";

const Register = () => {
  const router = useRouter();
  const [passwordEye, setPasswordEye] = useState<boolean>(false);
  return (
    <div className={scss.authSection}>
      <div className={scss.content}>
        <h1>Добро пожаловать!</h1>
        <div className={scss.inputBlock}>
          <div className={scss.inputContainer}>
            <p>Фамилия</p>
            <div className={scss.input}>
              <FiUser />
              <input type="text" />
            </div>
            <span>Минимум 3 символа, только кириллица.</span>
          </div>
          <div className={scss.inputContainer}>
            <p>Имя</p>
            <div className={scss.input}>
              <FiUser />
              <input type="text" />
            </div>
          </div>
        </div>
        <div className={scss.inputContainer}>
          <p>Отчество</p>
          <div className={scss.input}>
            <FiUser />
            <input type="text" />
          </div>
        </div>
        <div className={scss.inputContainer}>
          <p>Email</p>
          <div className={scss.input}>
            <AiOutlineMail />
            <input type="text" />
          </div>
        </div>
        <div className={scss.inputBlock}>
          <div className={scss.inputContainer}>
            <p>Пароль</p>
            <div className={scss.input}>
              <input type={passwordEye ? "text" : "password"} />
              <p onClick={() => setPasswordEye(!passwordEye)}>
                {passwordEye ? <RiEyeLine /> : <RiEyeOffLine />}
              </p>
            </div>
            <span>
              Пароль должен содержать минимум 8 символов, хотя бы одну цифру и
              одну заглавную букву.
            </span>
          </div>
          <div className={scss.inputContainer}>
            <p>Повторите пароль</p>
            <div className={scss.input}>
              <input type={passwordEye ? "text" : "password"} />
              <p onClick={() => setPasswordEye(!passwordEye)}>
                {passwordEye ? <RiEyeLine /> : <RiEyeOffLine />}
              </p>
            </div>
          </div>
        </div>
        <div className={scss.button}>
          <Button text="Продолжить" variant={"primary"} />
        </div>
        <div className={scss.login}>
          <p>Уже есть аккаунт?</p>
          <Link href={"/login"}>Войти</Link>
        </div>
      </div>
      <div className={scss.rightImage}>
        <Image alt="/image.auth.page.svg" src="/image.auth.page.svg" fill />
      </div>
    </div>
  );
};

export default Register;
