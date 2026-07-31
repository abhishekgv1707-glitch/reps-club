"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
      }}
      whileHover={{
        y: -10,
      }}
      className="group rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 transition-all duration-300 hover:border-red-500 hover:shadow-2xl hover:shadow-red-500/10"
    >
      {/* Icon */}
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600/10 transition duration-300 group-hover:scale-110 group-hover:bg-red-600">
        <Icon
          size={32}
          className="text-red-500 transition group-hover:text-white"
        />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 leading-7 text-gray-400">
        {description}
      </p>
    </motion.div>
  );
}