"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  reverse?: boolean;
}

export default function ProgramCard({
  title,
  description,
  image,
  features,
  reverse = false,
}: ProgramCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`grid lg:grid-cols-2 gap-14 items-center ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image */}
      <div className="relative h-[350px] overflow-hidden rounded-3xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div>
        <span className="text-red-500 uppercase tracking-[0.3em] text-sm font-semibold">
          PROGRAM
        </span>

        <h2 className="mt-4 text-5xl font-black text-white">
          {title}
        </h2>

        <p className="mt-6 text-gray-400 leading-8">
          {description}
        </p>

        <div className="mt-8 space-y-4">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 text-white"
            >
              <CheckCircle
                size={20}
                className="text-red-500"
              />

              <span>{feature}</span>
            </div>
          ))}
        </div>

        <button className="mt-10 rounded-xl bg-red-600 px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 hover:bg-red-700">
          Join Program →
        </button>
      </div>
    </motion.div>
  );
}