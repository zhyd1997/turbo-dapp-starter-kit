import type { FC } from "react";
import { Badge } from "@workspace/ui/components/badge";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export type HeroSectionProps = {};

export const HeroSection: FC<HeroSectionProps> = (props) => {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center px-4 sm:px-6 lg:px-8">
        <Badge
          className="rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium"
          variant="secondary"
        >
          Next.js 15 + Tailwind CSS v4 + shadcn/ui
        </Badge>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
          Turbo DApp Starter Kit
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground text-base sm:text-lg md:text-xl sm:leading-7 md:leading-8 px-4">
          The ultimate Web3 development toolkit for building decentralized
          applications with Next.js 15, wagmi, RainbowKit, Hardhat, Tailwind CSS
          v4, and shadcn/ui.
        </p>
        <div className="flex">
          <ConnectButton />
        </div>
      </div>
    </section>
  );
};
