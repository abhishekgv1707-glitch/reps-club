import MembershipHero from "@/components/membership/MembershipHero";
import PricingSection from "@/components/membership/PricingSection";
import BenefitsSection from "@/components/membership/BenefitsSection";
import FAQSection from "@/components/membership/FAQSection";
import FinalCTA from "@/components/membership/FinalCTA";

export default function MembershipPage() {
  return (
    <main className="bg-[#0A0A0A] text-white">
      <MembershipHero />
      <PricingSection />
      <BenefitsSection />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}