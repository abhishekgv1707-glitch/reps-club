"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FeatureCard from "@/components/ui/FeatureCard";
import { features } from "@/data/features";

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative bg-gradient-to-b from-black via-zinc-950 to-black py-28"
    >
      <Container>
        {/* Section Heading */}
        <SectionTitle
          badge="WHY REPS CLUB"
          title="Not Just a Gym. A Place to Evolve."
          subtitle="From world-class equipment to expert coaching and a supportive fitness community, everything is designed to help you become your strongest self."
          center
        />

        {/* Feature Cards */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}