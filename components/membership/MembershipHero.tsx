"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MembershipHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2000&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-red-500/50 bg-red-500/10 text-red-400 text-sm tracking-widest uppercase">
            Reps Club Membership
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight text-white">
            INVEST IN
            <br />
            <span className="text-red-500">
              YOUR STRONGEST SELF
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-300 leading-8 max-w-2xl">
            Every membership unlocks premium equipment,
            expert coaching, world-class facilities,
            and a community committed to helping you
            become stronger every single day.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              href="#pricing"
              className="px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 transition text-white font-semibold"
            >
              Explore Plans
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 rounded-full border border-white/30 hover:border-red-500 hover:text-red-400 transition text-white font-semibold"
            >
              Talk to a Coach
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
    </section>
  );
}