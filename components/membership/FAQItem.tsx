"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

export default function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: FAQItemProps) {
  return (
    <div
  className={`rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-300
    ${
      isOpen
        ? "border border-red-500/40 bg-gradient-to-r from-red-500/5 to-white/5 shadow-[0_15px_40px_rgba(239,68,68,0.12)]"
        : "border border-white/10 bg-white/5 hover:-translate-y-1 hover:border-red-500/30"
    }`}
>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <h3 className="text-lg md:text-xl font-semibold text-white">
          {question}
        </h3>

        <motion.div animate={{ rotate: isOpen ? 45 : 0 }}>
          <Plus className="text-red-500 h-6 w-6" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
  height: 0,
  opacity: 0,
  y: -10,
}}

animate={{
  height: "auto",
  opacity: 1,
  y: 0,
}}

exit={{
  height: 0,
  opacity: 0,
  y: -10,
}}
            
            
            transition={{ duration: 0.3 }}
          >
            <p className="px-6 pb-6 text-gray-400 leading-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}