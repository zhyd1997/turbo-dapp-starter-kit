import type { FC } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import { CodeBlock } from "@/modules/home/code-block";
import { SECTION_KEY } from "@/modules/home/constants/sections";

import { readFileSync } from "fs";
import path from "path";

const connectSnippetFilePath = path.join(
  process.cwd(),
  "modules/home/constants/examples/connect-snippet.txt",
);
const CONNECT_JSX_CODE = readFileSync(connectSnippetFilePath, "utf8");

const contractSnippetFilePath = path.join(
  process.cwd(),
  "modules/home/constants/examples/contract-snippet.txt",
);
const CONTRACT_JSX_CODE = readFileSync(contractSnippetFilePath, "utf8");

const uiSnippetFilePath = path.join(
  process.cwd(),
  "modules/home/constants/examples/ui-snippet.txt",
);
const UI_JSX_CODE = readFileSync(uiSnippetFilePath, "utf8");

const TABS = {
  CONNECT: "connect",
  CONTRACT: "contract",
  UI: "ui",
};

export type ExamplesSectionProps = {};

export const ExamplesSection: FC<ExamplesSectionProps> = (props) => {
  return (
    <section
      id={SECTION_KEY.EXAMPLES}
      className="container py-8 md:py-12 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-6xl leading-tight">
          Code Examples
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground text-base sm:text-lg sm:leading-7">
          Get started quickly with pre-built components and examples.
        </p>
      </div>
      <div className="mx-auto max-w-4xl pt-6 sm:pt-10">
        <Tabs defaultValue={TABS.CONNECT} className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto sm:h-10">
            <TabsTrigger value={TABS.CONNECT} className="text-xs sm:text-sm">
              Wallet Connect
            </TabsTrigger>
            <TabsTrigger value={TABS.CONTRACT} className="text-xs sm:text-sm">
              Contract Interaction
            </TabsTrigger>
            <TabsTrigger value={TABS.UI} className="text-xs sm:text-sm">
              UI Components
            </TabsTrigger>
          </TabsList>
          <TabsContent value={TABS.CONNECT} className="mt-6 space-y-4">
            <CodeBlock code={CONNECT_JSX_CODE} />
          </TabsContent>
          <TabsContent value={TABS.CONTRACT} className="mt-6 space-y-4">
            <CodeBlock code={CONTRACT_JSX_CODE} />
          </TabsContent>
          <TabsContent value={TABS.UI} className="mt-6 space-y-4">
            <CodeBlock code={UI_JSX_CODE} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
