"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

type PricingCardProps = {
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  popular: boolean;
};

export default function PricingCard({
  name,
  price,
  duration,
  description,
  features,
  popular,
}: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`relative rounded-3xl border backdrop-blur-md p-8 transition-all duration-300 ${
        popular
          ? "border-red-500 bg-red-500/10 shadow-[0_0_40px_rgba(239,68,68,0.35)]"
          : "border-white/10 bg-white/5 hover:border-red-500/40"
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-red-600 px-5 py-2 text-sm font-semibold uppercase tracking-wider">
          Most Popular
        </div>
      )}

      <h3 className="mt-4 text-3xl font-bold">{name}</h3>

      <div className="mt-6 flex items-end">
        <span className="text-5xl font-extrabold">{price}</span>
        <span className="ml-2 text-gray-400">{duration}</span>
      </div>

      <p className="mt-5 text-gray-400 leading-7">
        {description}
      </p>

      <div className="mt-8 space-y-4">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-3">
            <div className="rounded-full bg-red-500/20 p-1">
              <Check className="h-4 w-4 text-red-500" />
            </div>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <button
        className={`mt-10 w-full rounded-full py-4 font-semibold transition ${
          popular
            ? "bg-red-600 hover:bg-red-700"
            : "border border-white/20 hover:border-red-500 hover:bg-red-500/10"
        }`}
      >
        Join Now
      </button>
    </motion.div>
  );
}