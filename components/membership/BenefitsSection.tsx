"use client";

import { motion } from "framer-motion";
import BenefitCard from "./BenefitCard";
import { benefits } from "@/data/benefits";

export default function BenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-36 px-6 lg:px-12">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-red-500/10 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-red-500/40 bg-red-500/10 px-5 py-2 text-sm uppercase tracking-[0.25em] text-red-400">
            Membership Benefits
          </span>

          <h2 className="mt-8 text-5xl font-black leading-none tracking-tight md:text-7xl">
            More Than
            <span className="block text-red-500">
              Just A Membership
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-400">
            Every membership is designed to give you the tools, guidance,
            and environment needed to transform your lifestyle—not just
            your workouts.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <BenefitCard {...benefit} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}