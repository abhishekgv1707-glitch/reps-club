"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-36 px-6">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/15 blur-[140px]" />

        <div className="absolute top-20 left-20 h-52 w-52 rounded-full bg-red-500/10 blur-[120px]" />

        <div className="absolute bottom-10 right-20 h-52 w-52 rounded-full bg-white/5 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-6xl rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl px-10 py-20 text-center"
      >

        {/* Badge */}
        <span className="inline-block rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
          Join Reps Club
        </span>

        {/* Heading */}
        <h2 className="mt-8 text-5xl font-black leading-tight text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.08)] md:text-7xl">
          YOUR STRONGEST SELF
          <br />
          STARTS TODAY.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
          Join thousands of members training with world-class equipment,
          expert coaches, and a community that motivates you to become
          stronger every single day.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

          <Link
            href="/membership"
            className="inline-flex items-center gap-3 rounded-xl bg-red-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:bg-red-700 hover:shadow-[0_0_40px_rgba(239,68,68,0.45)]"
          >
            Become A Member
            <ArrowRight size={20} />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:border-red-500/40 hover:bg-white/10 hover:border-red-500 hover:text-red-400"
          >
            Talk To A Coach
            <Phone size={18} />
          </Link>

        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-white/10 pt-12 sm:grid-cols-3">

          <div>
            <h3 className="text-4xl font-black text-red-500">5000+</h3>
            <p className="mt-2 text-gray-400">Active Members</p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-red-500">24/7</h3>
            <p className="mt-2 text-gray-400">Gym Access</p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-red-500">15+</h3>
            <p className="mt-2 text-gray-400">Certified Trainers</p>
          </div>

        </div>

      </motion.div>

    </section>
  );
}