"use client";

import { motion } from "framer-motion";
import FloatingCard from "@/components/ui/FloatingCard";
import { openMembershipChat } from "@/lib/whatsapp";

const stats = [
  { value: "5000+", label: "Active Members" },
  { value: "25+", label: "Certified Trainers" },
  { value: "8+", label: "Years Experience" },
  { value: "4.9★", label: "Google Rating" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24">

        <div className="grid w-full items-center gap-20 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="max-w-4xl">

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-black leading-none md:text-7xl"
            >
              BUILT FOR
              <br />
              THOSE WHO
              <br />
              <span className="text-red-600">REFUSE</span> TO QUIT.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 max-w-xl text-lg leading-8 text-gray-300"
            >
              Transform your body, build discipline, and become part of a
              premium fitness community designed to push your limits every day.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-5"
            >
              <button
  onClick={openMembershipChat}
  className="rounded-xl bg-red-600 px-8 py-4 font-semibold transition hover:scale-105 hover:bg-red-700"
>
  🔥 Start Your Journey
</button>

              <button className="rounded-xl border border-white/20 px-8 py-4 font-semibold transition hover:bg-white hover:text-black">
                ▶ Watch Gym Tour
              </button>
            </motion.div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label}>
                  <h3 className="text-4xl font-bold text-red-500">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-gray-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center lg:justify-end">
            <FloatingCard />
          </div>

        </div>

      </div>
    </section>
  );
}