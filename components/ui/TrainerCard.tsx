"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

interface Props {
  name: string;
  role: string;
  experience: string;
  image: string;
  specialties: string[];
  instagram: string;
  facebook: string;
}

export default function TrainerCard({
  name,
  role,
  experience,
  image,
  specialties,
}: Props) {
  return (
    <motion.div
      whileHover={{
  y: -10,
  scale: 1.02,
}}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition-all duration-500 hover:-translate-y-3 hover:border-red-500 hover:shadow-[0_0_60px_rgba(239,68,68,0.45)]"
    >
      <div className="relative h-[480px] overflow-hidden">
        <Image
  src={image}
  alt={name}
  fill
  className="object-cover transition duration-700 group-hover:scale-110"
/>

{/* Dark Overlay */}
<div className="absolute inset-0 bg-black/20" />

<div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

{/* Experience Badge */}
<div className="absolute top-4 right-4 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
  🏆 {experience}
</div>
      </div>

      <div className="p-6">
        <h3 className="text-3xl font-extrabold tracking-tight">
  {name}
</h3>

        <p className="mt-2 uppercase tracking-widest text-sm font-semibold text-red-500">
  {role}
        </p>
        

        <div className="mt-5 flex flex-wrap gap-2">
          {specialties.map((item) => (
            <span
              key={item}
              className="rounded-full bg-red-600/20 px-3 py-1 text-sm text-red-400"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-5 text-2xl">
         <FaInstagram className="cursor-pointer text-xl transition hover:text-red-500" />
<FaFacebookF className="cursor-pointer text-xl transition hover:text-red-500" />
        </div>
      </div>
    </motion.div>
  );
}