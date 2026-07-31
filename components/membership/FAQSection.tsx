"use client";

import { useState } from "react";
import { faqs } from "@/data/faq";
import FAQItem from "./FAQItem";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#0A0A0A] py-36 px-6">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-16">

          <span className="text-red-500 uppercase tracking-[0.3em] font-semibold">
            Questions
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black text-white">
  Everything You Need
  <br />
  To Know
</h2>

          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to know before joining Reps Club.
          </p>

        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>

      </div>
    </section>
  );
}