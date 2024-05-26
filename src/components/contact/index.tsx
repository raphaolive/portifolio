import Image from "next/image";
import Link from "next/link";
import React from "react";

import picture from "@/assets/me-serious.png";
import {
  Envelope,
  Mailbox,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";

import { Button } from "../ui/button";

export const Contact = () => {
  return (
    <section className="flex relative w-screen h-auto justify-center items-center px-32">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-56">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl mb-8">Let&apos;s get in touch</h1>

          <Link href="mailto:7raphaolive@gmail.com" target="_blank">
            <Button
              variant="link"
              className="flex p-0 items-center gap-5 mb-5 text-1xl"
            >
              <Envelope size={50} />
              7raphaolive@gmail.com
            </Button>
          </Link>
          <Link
            href="https://wa.me/5541995765201?text=Hello%20I%20would%20like%20to%20talk%20about%20your%20services%20as%20a%20frontend%20developer."
            target="_blank"
          >
            <Button
              variant="link"
              className="flex p-0 items-center gap-5 text-1xl"
            >
              <WhatsappLogo size={50} />
              Message me
            </Button>
          </Link>
        </div>
        <div className="relative opacity-50">
          <Image src={picture} alt="Raphael's photo" height={700} />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black to-transparent" />
        </div>
      </div>
    </section>
  );
};
