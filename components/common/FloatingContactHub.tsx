"use client";

import { useState } from "react";
import {
  MessageCircle,
  Phone,
  MapPin,
  Calendar,
  Plus,
} from "lucide-react";
import { openGeneralChat } from "@/lib/whatsapp";

const PHONE_NUMBER = "+917483136683";

export default function FloatingContactHub() {
  const [open, setOpen] = useState(false);

  const buttonBase =
    "flex items-center gap-3 rounded-full text-white backdrop-blur-md shadow-2xl transition-all duration-300 ease-out hover:scale-105";

  return (
    <div className="fixed bottom-12 right-5 z-[9999] flex flex-col items-end">
      {/* Floating Options */}
      <div
        className={`mb-4 flex flex-col items-end gap-3 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-5 pointer-events-none"
        }`}
      >
        {/* WhatsApp */}
        <button
          type="button"
          onClick={openGeneralChat}
          className={`${buttonBase} border border-red-600/40 bg-zinc-900 px-4 py-3 hover:border-red-500 hover:bg-zinc-800`}
          style={{ transitionDelay: open ? "0ms" : "0ms" }}
        >
          <MessageCircle size={20} />
          <span className="hidden md:inline font-medium">
            WhatsApp
          </span>
        </button>

        {/* Call */}
        <button
          type="button"
          onClick={() => window.open(`tel:${PHONE_NUMBER}`)}
          className={`${buttonBase} border border-red-600/40 bg-zinc-900 px-4 py-3 hover:border-red-500 hover:bg-zinc-800`}
          style={{ transitionDelay: open ? "70ms" : "0ms" }}
        >
          <Phone size={20} />
          <span className="hidden md:inline font-medium">
            Call
          </span>
        </button>

        {/* Directions */}
        <button
          type="button"
          onClick={() => window.open("https://maps.google.com", "_blank")}
          className={`${buttonBase} border border-red-600/40 bg-zinc-900 px-4 py-3 hover:border-red-500 hover:bg-zinc-800`}
          style={{ transitionDelay: open ? "140ms" : "0ms" }}
        >
          <MapPin size={20} />
          <span className="hidden md:inline font-medium">
            Directions
          </span>
        </button>

        {/* Book Trial */}
        <button
          type="button"
          className={`${buttonBase} bg-red-600 px-5 py-3.5 hover:bg-red-700`}
          style={{ transitionDelay: open ? "210ms" : "0ms" }}
        >
          <Calendar size={20} />
          <span className="hidden md:inline font-medium">
            Book Trial
          </span>
        </button>
      </div>

      {/* Main Floating Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-[0_0_35px_rgba(239,68,68,0.55)] transition-all duration-300 hover:scale-110 hover:bg-red-700"
      >
        <Plus
          className={`h-8 w-8 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        />
      </button>
    </div>
  );
}