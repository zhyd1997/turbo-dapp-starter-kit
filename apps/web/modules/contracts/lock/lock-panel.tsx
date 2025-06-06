"use client";

import type { FC } from "react";

import { useLock } from "@/hooks/contracts/useLock";

export type LockPanelProps = {};

export const LockPanel: FC<LockPanelProps> = () => {
  const { readContractResult } = useLock();
  const { data: unlockTime, error, isLoading } = readContractResult;

  const unlockTimeInMs =
    typeof unlockTime === "bigint"
      ? Number(unlockTime) * 1000
      : unlockTime
        ? unlockTime * 1000
        : "";

  return (
    <div className="">
      {isLoading && <p>Loading unlock time...</p>}
      {error && <p>Error: {error.message}</p>}
      {unlockTime && (
        <p>
          <b>Unlock Time:</b> {new Date(unlockTimeInMs).toLocaleString()}
        </p>
      )}
    </div>
  );
};
