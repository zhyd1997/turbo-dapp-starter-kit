import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import type { Config } from 'wagmi';
import {
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    bsc,
    bscTestnet,
  } from 'wagmi/chains';

export const config: Config = getDefaultConfig({
    chains: [mainnet, polygon, optimism, arbitrum, base, bsc, bscTestnet],
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID || '',
    appName: 'Turbo DApp Starter Kit',
    ssr: true,
});
