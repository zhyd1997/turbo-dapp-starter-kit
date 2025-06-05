"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@workspace/ui/components/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@workspace/ui/components/sheet";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          <span className="font-bold">Turbo DApp Starter Kit</span>
        </MobileLink>
        <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            <MobileLink href="#features" onOpenChange={setOpen}>
              Features
            </MobileLink>
            <MobileLink href="#technologies" onOpenChange={setOpen}>
              Technologies
            </MobileLink>
            <MobileLink href="#examples" onOpenChange={setOpen}>
              Examples
            </MobileLink>
            <MobileLink href="#get-started" onOpenChange={setOpen}>
              Get Started
            </MobileLink>
            <MobileLink
              href="https://git.new/turbo-dapp-starter-kit"
              onOpenChange={setOpen}
              className="flex items-center"
            >
              GitHub Repository
            </MobileLink>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps {
  href: string;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => {
        onOpenChange?.(false);
      }}
      className={`text-foreground/70 transition-colors hover:text-foreground ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
