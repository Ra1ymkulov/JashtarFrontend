"use client";
import scss from "./NavPanel.module.scss";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  items?: BreadcrumbItem[];
};

export const NavPanel = ({ items = [] }: Props) => {
  const allItems: BreadcrumbItem[] = [
    { label: "Главная", href: "/" },
    ...items,
  ];

  return (
    <div className="container">
      <nav className={scss.navPanel}>
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;

          return (
            <span key={index} className={scss.item}>
              {index !== 0 && <IoIosArrowForward />}

              {isLast ? (
                <span className={scss.active}>{item.label}</span>
              ) : (
                <Link href={item.href!}>{item.label}</Link>
              )}
            </span>
          );
        })}
      </nav>
    </div>
  );
};
