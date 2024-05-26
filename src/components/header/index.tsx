"use client";

import React, { useEffect, useState } from "react";

import profileImage from "@/assets/avatar.png";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ModeToggle } from "../ui/mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { List } from "@phosphor-icons/react/dist/ssr";

export const Header = () => {
  const hasWindow = typeof window !== "undefined";

  function getWindowWidth() {
    const width = hasWindow ? window.innerWidth : null;
    return width;
  }

  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => {
        setWindowWidth(getWindowWidth());
      };
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasWindow]);

  console.log(windowWidth);

  if (windowWidth && windowWidth <= 1024) {
    return (
      <header>
        <nav className="flex absolute bg-background dark:bg-transparent w-screen justify-between items-center px-10 py-5 z-10">
          <div className="flex justify-center items-center gap-4 ">
            <Image
              src={profileImage}
              alt="avatar"
              objectFit="contain"
              width={50}
              height={50}
              style={{ borderRadius: "100%" }}
            />
            <Link href="/">
              <p className="text-xs sm:text-base">Raphael O. Santos</p>
            </Link>
          </div>
          <div className="flex justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <List size={32} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Button variant="link">
                      <Link href="#">About me</Link>
                    </Button>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Button variant="link">
                      <Link href="#">Works</Link>
                    </Button>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Button variant="link">
                      <Link href="#">Contact</Link>
                    </Button>
                  </DropdownMenuItem>
                  <DropdownMenuItem></DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header>
      <nav className="flex absolute bg-background dark:bg-transparent w-screen justify-between items-center px-10 py-5 z-10">
        <div className="flex justify-center items-center gap-4 w-[300px] ">
          <Image
            src={profileImage}
            alt="avatar"
            objectFit="contain"
            width={50}
            height={50}
            style={{ borderRadius: "100%" }}
          />
          <p>Raphael O. Santos</p>
        </div>
        <div className="flex justify-center w-[300px]">
          <>
            <Button variant="link">
              <Link href="#">About me</Link>
            </Button>
            <Button variant="link">
              <Link href="#">Works</Link>
            </Button>
            <Button variant="link">
              <Link href="#">Contact</Link>
            </Button>
          </>
        </div>
        <div className="flex justify-center w-[300px]">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};
