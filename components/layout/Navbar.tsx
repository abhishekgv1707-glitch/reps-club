"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programs" },
  { name: "Membership", href: "/membership" },
  { name: "Trainers", href: "/trainers" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl shadow-2xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group">
          <h1 className="text-4xl font-black tracking-tight">
            <span className="text-red-600 group-hover:text-red-500 transition">
              REPS
            </span>{" "}
            <span className="text-white">CLUB</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-gray-300 hover:text-white transition group"
            >
              {item.name}

              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <button className="hidden lg:block bg-red-600 hover:bg-red-700 hover:scale-105 transition-all duration-300 px-7 py-3 rounded-xl font-semibold shadow-lg shadow-red-600/30">
          Start Today →
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-zinc-950 border-t border-white/10">
          <div className="flex flex-col p-6 gap-6">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg text-gray-300 hover:text-red-500 transition"
              >
                {item.name}
              </Link>
            ))}

            <button className="bg-red-600 rounded-xl py-3 font-semibold">
              Start Today
            </button>
          </div>
        </div>
      )}
    </header>
  );
}