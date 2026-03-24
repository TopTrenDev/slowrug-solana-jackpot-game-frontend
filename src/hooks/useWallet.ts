import { useState, useEffect, useCallback } from "react";

interface WalletState {
  connected: boolean;
  address: string | null;
  shortAddress: string | null;
  connect: () => Promise<void>;
  disconnect: () => void;
}

export function useWallet(): WalletState {
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("wallet_address");
    if (saved) setAddress(saved);
  }, []);

  const connect = useCallback(async () => {
    try {
      const phantom = (window as any).phantom?.solana ?? (window as any).solana;
      if (phantom?.isPhantom) {
        const resp = await phantom.connect();
        const addr = resp.publicKey.toString();
        setAddress(addr);
        localStorage.setItem("wallet_address", addr);
        return;
      }
      // Fallback: open Phantom install page
      window.open("https://phantom.app/", "_blank");
    } catch (err) {
      console.error("Wallet connect failed:", err);
    }
  }, []);

  const disconnect = useCallback(() => {
    try {
      const phantom = (window as any).phantom?.solana ?? (window as any).solana;
      phantom?.disconnect?.();
    } catch {}
    setAddress(null);
    localStorage.removeItem("wallet_address");
  }, []);

  const shortAddress = address
    ? `${address.slice(0, 4)}...${address.slice(-4)}`
    : null;

  return { connected: !!address, address, shortAddress, connect, disconnect };
}
