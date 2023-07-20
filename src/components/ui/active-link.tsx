'use client'
import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
  className: string;
  href: string;
};
const ActiveLink = ({ children, className, href }: Props) => {
  const handleClick = function (this: Element) {
    const navLinks = document.querySelectorAll("nav-link");
    navLinks.forEach((el) => el.classList.remove("active"));

    this.classList.add("active");
  };
  return (
    <Link onClick={handleClick} className={className} href={href} >
      {children}
    </Link>
  );
};

export default ActiveLink;
