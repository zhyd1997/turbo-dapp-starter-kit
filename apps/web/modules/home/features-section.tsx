import type { FC } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Code2, Layers, Moon, Package, Palette, Zap } from "lucide-react";
import { SECTION_KEY } from "@/modules/home/constants/sections";

export type FeaturesSectionProps = {};

export const FeaturesSection: FC<FeaturesSectionProps> = (props) => {
  return (
    <section
      id={SECTION_KEY.FEATURES}
      className="container space-y-6 bg-slate-50 py-8 dark:bg-slate-950 md:py-12 lg:py-24"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Features
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Everything you need to build modern Web3 applications with the latest
          technologies.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 px-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:max-w-[64rem]">
        <Card>
          <CardHeader>
            <Zap className="h-10 w-10 text-primary" />
            <CardTitle>Turborepo</CardTitle>
            <CardDescription>
              High-performance build system for JavaScript and TypeScript
              codebases
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Code2 className="h-10 w-10 text-primary" />
            <CardTitle>Next.js 15</CardTitle>
            <CardDescription>
              The React framework with App Router, Server Components and more
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Layers className="h-10 w-10 text-primary" />
            <CardTitle>Web3 Ready</CardTitle>
            <CardDescription>
              Integrated with wagmi and RainbowKit for seamless wallet
              connections
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Package className="h-10 w-10 text-primary" />
            <CardTitle>Hardhat</CardTitle>
            <CardDescription>
              Development environment for Ethereum smart contracts
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Palette className="h-10 w-10 text-primary" />
            <CardTitle>Tailwind CSS v4</CardTitle>
            <CardDescription>
              Utility-first CSS framework with the latest features
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Moon className="h-10 w-10 text-primary" />
            <CardTitle>Dark Mode</CardTitle>
            <CardDescription>
              Built-in dark mode support with shadcn/ui components
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
};
