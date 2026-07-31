"use client";

import { motion } from "framer-motion";
import PricingCard from "./PricingCard";
import { membershipPlans } from "@/data/membershipPlans";

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#0A0A0A] py-28 px-6 lg:px-12"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-1/2 top-40 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[180px]" />

        <div className="absolute -left-32 bottom-0 h-[350px] w-[350px] rounded-full bg-red-500/5 blur-[150px]" />

        <div className="absolute -right-32 top-16 h-[320px] w-[320px] rounded-full bg-red-500/5 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-red-500/40 bg-red-500/10 px-5 py-2 text-sm font-medium uppercase tracking-[0.25em] text-red-400">
            Membership Plans
          </span>

          <h2 className="mt-8 text-5xl font-black leading-none tracking-tight md:text-7xl">
            Choose Your
            <br />
            <span className="text-red-500">Perfect Plan</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl">
            Whether you're beginning your fitness journey or training like an
            athlete, our memberships are designed to help you stay consistent,
            motivated, and stronger every day.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-16 grid grid-cols-1 gap-8 text-center sm:grid-cols-3"
        >
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
        </motion.div>

        {/* Pricing Cards */}
        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {membershipPlans.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}