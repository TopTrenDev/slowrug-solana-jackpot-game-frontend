import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import ParticleField from "@/components/effects/ParticleField";
import LiveChat from "@/components/chat/LiveChat";

export default function AppLayout() {
  return (
    <div className="relative flex min-h-screen cyber-grid">
      <ParticleField />
      <Sidebar />
      <main className="relative z-10 ml-[260px] flex-1 transition-[margin] duration-300">
        <Outlet />
      </main>
      <LiveChat />
    </div>
  );
}
