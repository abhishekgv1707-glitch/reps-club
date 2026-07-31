"use client";

import { motion } from "framer-motion";
import ProgramCard from "@/components/ui/ProgramCard";
import { programs } from "@/data/programs";

export default function Programs() {
  return (
    <section
      id="programs"
      className="bg-black py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >
          <span className="rounded-full border border-red-600/30 bg-red-600/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            TRAINING PROGRAMS
          </span>

          <h2 className="mt-8 text-5xl font-black text-white md:text-6xl">
            Choose Your Path
            <br />
            To Greatness
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Whether you're building muscle, losing weight, or becoming
            stronger every day, we have the perfect training program
            designed for your goals.
          </p>
        </motion.div>

        {/* Programs */}
        <div className="space-y-32">
          {programs.map((program, index) => (
            <ProgramCard
              key={program.title}
              title={program.title}
              description={program.description}
              image={program.image}
              features={program.features}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>

      </div>
    </section>
  );
}