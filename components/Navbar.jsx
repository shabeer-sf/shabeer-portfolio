import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center gap-2">
      <Link
        target="_blank"
        href={"mailto:shabeersggs@gmail.com"}
        className="flex gap-2 items-center"
      >
        <div className="text-slate-400 rounded-full bg-[#1a1a1a] p-4">
          <Mail size={18} />
        </div>
        <p className="text-slate-400 max-md:hidden">shabeersggs@gmail.com</p>
      </Link>
      <div className=" flex justify-end items-center gap-2">
        <Link
          target="_blank"
          href={
            "https://www.linkedin.com/in/mohammed-shabeer-1a4869221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          }
          className="text-slate-400"
        >
          LinkedIn
        </Link>
        <div className="text-slate-400">/</div>
        <Link
          target="_blank"
          href={
            "https://www.linkedin.com/in/mohammed-shabeer-1a4869221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          }
          className="text-slate-400"
        >
          Instagram
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
