"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { BaseSyntheticEvent } from "react";

type Props = {
  children: React.ReactNode;
  className: string;
  href: string;
};
const ActiveLink = ({ children, className, href }: Props) => {
  const currentPath = usePathname()
  return (
    <Link className={`${className} ${href===currentPath && 'active-link'}`} href={href}>
      {children}
    </Link>
  );
};

export default ActiveLink;
