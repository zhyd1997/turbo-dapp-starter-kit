import type { FC } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import { CodeBlock } from "@/modules/home/code-block";
import { SECTION_KEY } from "@/modules/home/constants/sections";

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
        <Tabs defaultValue="connect" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto sm:h-10">
            <TabsTrigger value="connect" className="text-xs sm:text-sm">
              Wallet Connect
            </TabsTrigger>
            <TabsTrigger value="contract" className="text-xs sm:text-sm">
              Contract Interaction
            </TabsTrigger>
            <TabsTrigger value="ui" className="text-xs sm:text-sm">
              UI Components
            </TabsTrigger>
          </TabsList>
          <TabsContent value="connect" className="mt-6 space-y-4">
            <CodeBlock
              code={`import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

export function WalletConnect() {
  const { address, isConnected } = useAccount();
  
  return (
    <div className="flex flex-col items-center gap-4">
      <ConnectButton />
      
      {isConnected && (
        <div className="p-4 border rounded-lg">
          Connected to {address}
        </div>
      )}
    </div>
  );
}`}
            />
          </TabsContent>
          <TabsContent value="contract" className="mt-6 space-y-4">
            <CodeBlock
              code={`import { useContractRead, useContractWrite } from 'wagmi';
import { abi } from './MyContract.json';

export function ContractInteraction() {
  const contractAddress = '0x...';
  
  const { data: tokenName } = useContractRead({
    address: contractAddress,
    abi,
    functionName: 'name',
  });
  
  const { write: mint } = useContractWrite({
    address: contractAddress,
    abi,
    functionName: 'mint',
  });
  
  return (
    <div className="space-y-4">
      <div>Token Name: {tokenName}</div>
      <button 
        onClick={() => mint({ args: [1] })}
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
      >
        Mint Token
      </button>
    </div>
  );
}`}
            />
          </TabsContent>
          <TabsContent value="ui" className="mt-6 space-y-4">
            <CodeBlock
              code={`import { Button } from "@workspace/ui/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { ModeToggle } from "@/components/mode-toggle"

export function DashboardCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Dashboard
          <ThemeToggle />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Your Web3 dashboard with dark mode support
        </p>
        <div className="mt-4">
          <Button>View Details</Button>
        </div>
      </CardContent>
    </Card>
  );
}`}
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
