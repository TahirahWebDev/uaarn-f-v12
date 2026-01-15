"use client";

import { Crown } from "lucide-react";

// Update the function signature to define the props
// This removes the "Property 'onClickAction' does not exist" error
export default function UpgradeButton({ onClickAction }: { onClickAction: () => void }) {
  return (
    <button
      onClick={onClickAction}
      className="relative inline-flex items-center gap-2 px-5 py-2.5 
                 rounded-full border border-[#0E2931]/10 bg-white
                 text-[#0E2931] font-black text-[11px] uppercase tracking-[0.2em]
                 shadow-lg shadow-[#0E2931]/5 transition-all duration-300 
                 hover:shadow-xl hover:scale-105 hover:border-[#861211]/30
                 focus:outline-none focus:ring-2 focus:ring-[#861211]/20 active:scale-95"
    >
      <Crown size={16} className="text-[#861211]" />
      <span>Pricing</span>
    </button>
  );
}