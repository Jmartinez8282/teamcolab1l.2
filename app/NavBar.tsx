"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { RiTeamLine } from "react-icons/ri";
import classnames from 'classnames'

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <>
      <nav className="flex space-x-6 mb-5 h-14 items-center px-5 border-b">
        <Link href={"/"}>
          <RiTeamLine size={40} />
        </Link>
        <ul className="flex space-x-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
              href={link.href}
                className={classnames({
                    "text-zinc-300": link.href === currentPath,
                    "text-zinc-700": link.href !== currentPath,
                    "hover:text-zinc-200 transition-colors": true
                })}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
