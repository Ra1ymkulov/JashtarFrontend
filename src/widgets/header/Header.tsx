"use client";
import { Button } from "@/src/shared/ui/button/Button";
import scss from "./Header.module.scss";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <header className={scss.header}>
      <div className="container">
        {menu && (
          <div className={scss.burgerMenu}>
            <p className={scss.burgerClose} onClick={() => setMenu(false)}>
              <IoCloseSharp />
            </p>
            <a href="/">Главная</a>
            <a href="/about-movement">О движении</a>
            <a href="/">Направления</a>
            <a href="/">Мероприятия</a>
            <a href="/projects">Проекты</a>
            <a href="/">Медиа</a>
          </div>
        )}
        {!menu && (
          <div className={scss.content}>
            <div onClick={() => setMenu(true)} className={scss.burgerOpen}>
              <HiOutlineMenuAlt1 />
            </div>
            <img className={scss.logo} src="/logo.svg" alt="" />
            <nav>
              <a href="/">Главная</a>
              <a href="/about-movement">О движении</a>
              <a href="/directions">Направления</a>
              <a href="/events">Мероприятия</a>
              <a href="/projects">Проекты</a>
              <a href="/media">Медиа</a>
            </nav>
            <div className={scss.buttons}>
              <select>
                <option value="ru">РУС</option>
                <option value="ky">KGZ</option>
                <option value="en">ENG</option>
              </select>
              <Button text="Войти" variant="primary" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
