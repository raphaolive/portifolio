import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rapha Olive",
  description: "Rapha Olive Portifolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const footerLinks = [
    {
      name: "LinkedIn",
      icon: <LinkedInLogoIcon />,
      href: "https://www.linkedin.com/in/raphael-oliveira-santos-18967b225/",
    },
    {
      name: "GitHub",
      icon: <GitHubLogoIcon />,
      href: "https://github.com/raphaolive/",
    },
    {
      name: "Email",
      icon: <EnvelopeClosedIcon />,
      href: "mailto:7raphaolive@gmail.com",
    },
    {
      name: "Instagram",
      icon: <InstagramLogoIcon />,
      href: "https://www.instagram.com/euraphaolive/",
    },
  ];

  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background antialiased overflow-x-hidden",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
      <footer className="w-full bg-muted-foreground dark:bg-black">
        <div className="flex py-6 px-16 m-auto text-sm justify-between text-gray-500">
          <div className="flex gap-6">
            <p> &#169; All copyrights reservered</p>
            <Separator orientation="vertical" />
          </div>
          <div className="flex gap-6 text-sm">
            {footerLinks.map((link) => (
              <Link key={link.name} href={link.href} target="_blank">
                <div className="flex gap-2 items-center">
                  {link.icon}
                  {link.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </html>
  );
}
