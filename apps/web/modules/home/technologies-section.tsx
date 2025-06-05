import type { FC } from "react";
import { TechCard } from "@/modules/home/tech-card";
import { SECTION_KEY } from "@/modules/home/constants/sections";

export type TechnologiesSectionProps = {};

export const TechnologiesSection: FC<TechnologiesSectionProps> = (props) => {
  return (
    <section
      id={SECTION_KEY.TECHNOLOGIES}
      className="container space-y-6 py-8 md:py-12 lg:py-24"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Technologies
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Built with the latest and greatest technologies for Web3 development.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 px-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:max-w-[64rem]">
        <TechCard
          title="wagmi"
          description="React Hooks for Ethereum - wallet connection, contract interactions, and more"
          link="https://wagmi.sh"
        />
        <TechCard
          title="RainbowKit"
          description="The best way to connect a wallet - beautiful, customizable, and feature-rich"
          link="https://www.rainbowkit.com"
        />
        <TechCard
          title="Hardhat"
          description="Ethereum development environment for professionals"
          link="https://hardhat.org"
        />
        <TechCard
          title="Next.js 15"
          description="The React framework for production with the latest features"
          link="https://nextjs.org"
        />
        <TechCard
          title="Tailwind CSS v4"
          description="A utility-first CSS framework packed with classes"
          link="https://tailwindcss.com"
        />
        <TechCard
          title="shadcn/ui"
          description="Beautifully designed components built with Radix UI and Tailwind CSS"
          link="https://ui.shadcn.com"
        />
      </div>
    </section>
  );
};
