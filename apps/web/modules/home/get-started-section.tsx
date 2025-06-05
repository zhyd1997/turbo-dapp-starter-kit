import type { FC } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Button } from "@workspace/ui/components/button";
import Link from "next/link";
import { Github } from "lucide-react";
import { CodeBlock } from "@/modules/home/code-block";
import { SECTION_KEY } from "@/modules/home/constants/sections";

export type GetStartedSectionProps = {};

export const GetStartedSection: FC<GetStartedSectionProps> = (props) => {
  return (
    <section
      id={SECTION_KEY.GET_STARTED}
      className="container space-y-6 bg-slate-50 py-8 dark:bg-slate-950 md:py-12 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-6xl leading-tight">
          Get Started
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground text-base sm:text-lg sm:leading-7">
          Start building your Web3 application in minutes.
        </p>
      </div>
      <div className="mx-auto grid max-w-3xl gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Clone the Repository</CardTitle>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`git clone https://github.com/zhyd1997/turbo-dapp-starter-kit.git
cd turbo-dapp-starter-kit
pnpm install`}
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Start Development Server</CardTitle>
          </CardHeader>
          <CardContent>
            <CodeBlock code={`pnpm dev`} />
            <p className="mt-4 text-sm text-muted-foreground">
              This will start the Next.js development server and the Hardhat
              network.
            </p>
          </CardContent>
        </Card>
        <div className="flex justify-center">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="https://git.new/turbo-dapp-starter-kit">
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
