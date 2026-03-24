import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";
import ParticleField from "@/components/effects/ParticleField";
import LiveChat from "@/components/chat/LiveChat";

export default function AppLayout() {
  return (
    <div className="relative flex min-h-screen cyber-grid">
      <ParticleField />
      {/* Desktop sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>
      {/* Mobile header */}
      <MobileHeader />
      <main className="relative z-10 w-full transition-[margin] duration-300 md:ml-[260px] pt-14 md:pt-0">
        <Outlet />
      </main>
      <LiveChat />
    </div>
  );
}
