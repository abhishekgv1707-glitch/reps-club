"use client";

import { motion } from "framer-motion";
import TrainerCard from "@/components/ui/TrainerCard";
import { trainers } from "@/data/trainers";

export default function Trainers() {
  return (
    <section
      id="trainers"
      className="py-28 bg-black"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-red-500 uppercase tracking-[0.3em]">
            Our Coaches
          </span>

          <h2 className="text-5xl md:text-6xl font-black mt-4">
            Meet The Experts
          </h2>

          <p className="text-zinc-400 mt-6 max-w-3xl mx-auto">
            Our certified trainers are committed to helping every member
            unlock their full potential through personalized coaching.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <TrainerCard
              key={trainer.name}
              {...trainer}
            />
          ))}
        </div>

      </div>
    </section>
  );
}