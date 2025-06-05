"use client"

import {
    RainbowKitProvider,
  } from '@rainbow-me/rainbowkit';
  import { WagmiProvider } from 'wagmi';
  import {
    QueryClientProvider,
    QueryClient,
  } from "@tanstack/react-query";
import { config } from '@/lib/wagmi';

  const client = new QueryClient();

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider>
            {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
    )
}