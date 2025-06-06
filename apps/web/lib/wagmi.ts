import { createConfig, http, injected } from "wagmi";
import type { Config } from "wagmi";
import { hardhat, mainnet } from "wagmi/chains";
import { createClient } from "viem";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";

export const hardHatConfig = createConfig({
  chains: [hardhat],
  connectors: [injected()],
  client({ chain }) {
    return createClient({ chain, transport: http("http://127.0.0.1:8545") });
  },
  ssr: true,
});

export const config: Config = getDefaultConfig({
  chains: [mainnet],
  appName: "Turbo DApp Starter Kit",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
  ssr: true,
});
