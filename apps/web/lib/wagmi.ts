import { createConfig, http, injected } from "wagmi";
import type { Config } from "wagmi";
import { hardhat, mainnet } from "wagmi/chains";
import { createClient } from "viem";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { APP_INFO } from "@/config/app";

// Only for local development
export const hardHatConfig = createConfig({
  chains: [hardhat],
  connectors: [injected()],
  client({ chain }) {
    // https://wagmi.sh/react/api/transports/http#url
    // Defaults to `chain.rpcUrls.default.http[0]` - http://127.0.0.1:8545
    return createClient({ chain, transport: http() });
  },
  ssr: true,
});

// Both for prod and dev mode
export const config: Config = getDefaultConfig({
  chains: [mainnet, hardhat],
  appName: APP_INFO.NAME,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
  ssr: true,
  transports: {
    [hardhat.id]: http(),
  },
});
