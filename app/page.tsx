import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Programs from "@/components/sections/Programs";
import Trainers from "@/components/sections/Trainers";  

export default function Home() {
  return (
    <main className="bg-zinc-950 min-h-screen text-white">
      <Navbar />
      <Hero />
<WhyChooseUs />
<Programs />
<Trainers />
    </main>
  );
}