"use client";

import { useReadContract } from "wagmi";
import { abi as lockAbi } from "@workspace/contracts/artifacts/contracts/Lock.sol/Lock.json";
// import deployedAddresses from "@workspace/contracts/ignition/deployments/chain-31337/deployed_addresses.json"
import { hardhat } from "wagmi/chains";

/**
 * `Lock` contract CRUD hook.
 */
export const useLock = () => {
  const readContractResult = useReadContract<any, any, any, any, any>({
    // FIXME: UNCOMMENT IT TO MAKE IT WORK
    // address: deployedAddresses['LockModule#Lock'] as `0x${string}`,
    abi: lockAbi,
    functionName: "unlockTime",
    chainId: hardhat.id,
  });

  console.dir(readContractResult);

  return {
    readContractResult,
  };
};
