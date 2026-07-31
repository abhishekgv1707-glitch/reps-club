"use client";

import { motion } from "framer-motion";
import { LucideIcon, ArrowRight } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function BenefitCard({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <motion.div
        whileHover={{
  y: -12,
  scale: 1.02,
}}
      transition={{
  duration: 0.35,
  ease: "easeOut",
}}
        className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(239,68,68,0.15)]"
    >
      <div className="mb-8 inline-flex rounded-2xl bg-red-500/10 p-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-500/20">
        <Icon className="h-10 w-10 text-red-500 transition-transform duration-300 group-hover:scale-110" />
      </div>

      <h3 className="text-3xl font-bold tracking-tight text-white">
        {title}
      </h3>

      <p className="mt-5 leading-8 text-gray-400">
        {description}
      </p>

      <div className="mt-8 flex items-center gap-2 text-red-500 transition-all duration-300 group-hover:translate-x-2">
        <span className="font-semibold">
  Explore Benefits
</span>
        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </motion.div>
  );
}