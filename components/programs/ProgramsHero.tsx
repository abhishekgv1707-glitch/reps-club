"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProgramsHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 uppercase tracking-[0.4em] text-red-500"
        >
          REPS CLUB PROGRAMS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl font-black leading-tight text-white md:text-8xl"
        >
          TRAIN
          <br />
          WITHOUT
          <span className="text-red-500"> LIMITS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-zinc-300"
        >
          Discover world-class training programs designed to help you
          build strength, improve endurance, and transform your lifestyle.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/membership"
            className="rounded-full bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700"
          >
            Join Now →
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Talk to a Coach
          </Link>
        </motion.div>
      </div>
    </section>
  );
}