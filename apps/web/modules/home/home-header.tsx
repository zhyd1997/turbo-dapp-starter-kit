import type { FC } from "react";
import { Button } from "@workspace/ui/components/button";
import Link from "next/link";
import { Github, Package } from "lucide-react";
import { MobileNav } from "@/components/mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { SECTION_KEY } from "@/modules/home/constants/sections";
import { APP_INFO } from "@/config/app";

export type HomeHeaderProps = {};

export const HomeHeader: FC<HomeHeaderProps> = (props) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Package className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              {APP_INFO.NAME}
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href={`#${SECTION_KEY.FEATURES}`}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Features
            </Link>
            <Link
              href={`#${SECTION_KEY.TECHNOLOGIES}`}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Technologies
            </Link>
            <Link
              href={`#${SECTION_KEY.EXAMPLES}`}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Examples
            </Link>
            <Link
              href={`#${SECTION_KEY.GET_STARTED}`}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Get Started
            </Link>
          </nav>
        </div>
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link
              href="/"
              className="mr-6 flex items-center space-x-2 md:hidden"
            >
              <Package className="h-6 w-6" />
              <span className="font-bold">Turbo DApp</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-2">
            <ModeToggle />
            <Button
              variant="outline"
              size="icon"
              asChild
              className="hidden sm:flex"
            >
              <Link href={APP_INFO.GIT_REPO}>
                <Github className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button asChild size="sm" className="hidden sm:flex">
              <Link href="#get-started">Get Started</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
