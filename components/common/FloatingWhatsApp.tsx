"use client";

import { MessageCircle } from "lucide-react";
import { openGeneralChat } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  return (
    <button
      onClick={openGeneralChat}
      className="fixed bottom-6 right-6 z-[9999] h-16 w-16 rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-110 hover:bg-green-600 animate-pulse"
    >
      <MessageCircle className="mx-auto h-8 w-8" />
    </button>
  );
}