import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";

export const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row w-screen bg-gray-300 dark:bg-background px-10 md:px-20 py-10 items-center justify-between text-1xl gap-10 md:gap-0">
      <div>
        <Button variant="link">
          <Link href="https://github.com/raphaolive/" target="_blank">
            <GithubLogo size={28} weight="fill" />
          </Link>
        </Button>
        <Button variant="link">
          <Link href="https://www.instagram.com/euraphaolive/" target="_blank">
            <InstagramLogo size={28} weight="fill" />
          </Link>
        </Button>
        <Button variant="link">
          <Link
            href="https://www.linkedin.com/in/raphael-oliveira-santos-18967b225/"
            target="_blank"
          >
            <LinkedinLogo size={28} weight="fill" />
          </Link>
        </Button>
      </div>
      <div className="hidden md:flex justify-center ">
        <Button variant="link">
          <Link href="#">About me</Link>
        </Button>
        <Button variant="link">
          <Link href="#">Works</Link>
        </Button>
        <Button variant="link">
          <Link href="#">Contact</Link>
        </Button>
      </div>
      <div className="">&copy; All rights reserved</div>
    </footer>
  );
};
