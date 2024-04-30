import React from "react";
import avatar from "@/assets/avatar.png";
import Image from "next/image";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex relative justify-between items-center px-20 py-5 border-b-2">
      <div className="flex gap-6 items-center">
        <Image
          quality={40}
          src={avatar}
          alt="avatar"
          width={70}
          height={70}
          style={{ borderRadius: "100%" }}
        />
      </div>
      <div className="absolute left-48">
        <h1 className="text-2xl font-bold">Rapha Olive</h1>
        <p className="text-muted-foreground">Front-end developer</p>
      </div>
      <div>
        <Button variant="link">
          <Link href="#">About me</Link>
        </Button>
        <Button variant="link">
          <Link href="#">My skills</Link>
        </Button>
        <Button variant="link">
          <Link href="#">Portifolio</Link>
        </Button>
      </div>
      <ModeToggle />
    </header>
  );
};
