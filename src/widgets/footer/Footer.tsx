"use client";
import { useRouter } from "next/navigation";
import scss from "./Footer.module.scss";
import { SiInstagram } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const router = useRouter();
  const nav1 = [
    {
      id: 1,
      name: "О движении",
      link: "/",
    },
    {
      id: 2,
      name: "Направления деятельности",
      link: "/",
    },
    {
      id: 3,
      name: "Проекты",
      link: "/",
    },
    {
      id: 4,
      name: "Мероприятия",
      link: "/",
    },
  ];
  const nav2 = [
    {
      id: 1,
      name: "Новости",
      link: "/",
    },
    {
      id: 2,
      name: "Бренд материалы",
      link: "/",
    },
    {
      id: 3,
      name: "Медиа",
      link: "/",
    },
    {
      id: 4,
      name: "Региональные отделения",
      link: "/",
    },
    {
      id: 5,
      name: "Список курсов",
      link: "/",
    },
  ];
  return (
    <footer className={scss.footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.block}>
            <img className={scss.logo} src="/Artboard 1-8 1.svg" alt="logo" />
            <div className={scss.nav}>
              <ul>
                {nav1.map((item) => (
                  <li onClick={() => router.push(item.link)} key={item.id}>
                    {item.name}
                  </li>
                ))}
              </ul>
              <ul>
                {nav2.map((item) => (
                  <li onClick={() => router.push(item.link)} key={item.id}>
                    {item.name}
                  </li>
                ))}
              </ul>
              <ul>
                <li>Наши соцсети:</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>YouTube</li>
              </ul>
              <ul>
                <li>Контакты:</li>
                <li>WhatsApp</li>
                <li>Telegram</li>
              </ul>
              <ul>
                <li>Электронная почта:</li>
                <li>testing@gmail.com</li>
              </ul>
              <ul>
                <li>Адрес:</li>
                <li>Бишкек, Кыргызстан</li>
              </ul>
              <div className={scss.icons}>
                <li>
                  <SiInstagram />
                </li>
                <li>
                  <FaPhone />
                </li>
                <li>
                  <MdOutlineEmail />
                </li>
                <li>
                  <FaMapMarkerAlt />
                </li>
              </div>
            </div>
          </div>

          <p>
            © 2025 All rights reserved. Privacy Policy | Terms of Service |
            Cookies Settings
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
