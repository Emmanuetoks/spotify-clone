"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { BaseSyntheticEvent, MouseEventHandler } from "react";

type Props = {
  children: React.ReactNode;
  className: string;
  href: string;
  onClick?:MouseEventHandler;
};
const ActiveLink = ({ children, className, href, onClick }: Props) => {
  const currentPath = usePathname()
  return (
    <Link onClick={onClick} className={`${className} ${href===currentPath && 'active-link'}`} href={href}>
      {children}
    </Link>
  );
};

export default ActiveLink;
